const User = require('../models/User');
const { sendOTPEmail } = require('../config/emailConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (userId, email) => {
  return jwt.sign(
    { userId, email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '2d' }
  );
};

// @route   POST /api/auth/send-otp
// @desc    Send OTP to email
// @access  Public
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        otp,
        otpExpires,
        isVerified: false
      });
    } else {
      user.otp = otp;
      user.otpExpires = otpExpires;
    }

    await user.save();

    // Send OTP via email
    await sendOTPEmail(email, otp);

    res.status(200).json({
      success: true,
      message: 'OTP sent to your email',
      email: email
    });
  } catch (error) {
    console.error('Error in sendOTP:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error sending OTP'
    });
  }
};

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP and sign in user
// @access  Public
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Validate input
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Email and OTP are required'
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please sign up first.'
      });
    }

    // Check if OTP is expired
    if (!user.otpExpires || new Date() > user.otpExpires) {
      return res.status(400).json({
        success: false,
        message: 'OTP expired. Please request a new one.'
      });
    }

    // Verify OTP
    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP'
      });
    }

    // Mark user as verified and clear OTP
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    // Generate token
    const token = generateToken(user._id, user.email);

    res.status(200).json({
      success: true,
      message: 'OTP verified successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error('Error in verifyOTP:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error verifying OTP'
    });
  }
};

// @route   GET /api/auth/user
// @desc    Get current authenticated user
// @access  Private
exports.getUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-otp -otpExpires');

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
};

// @desc    Complete Signup details for an OTP-verified email
// @route   POST /api/auth/signup
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match.' });
    }

    // Check if user already has a fully registered account
    const userExists = await User.findOne({ email });
    
    if (userExists && userExists.password) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists.' });
    }

    if (userExists) {
      // Scenario 1: User exists from OTP phase but hasn't completed signup details
      userExists.name = name;
      userExists.password = password;
      await userExists.save();
      
      return res.status(200).json({
        success: true,
        message: 'Account setup complete!',
        data: { _id: userExists._id, name: userExists.name, email: userExists.email, token: generateToken(userExists._id) }
      });
    }

    // Scenario 2: Direct registration (creates a brand-new document)
    const newUser = await User.create({
      name,
      email,
      password,
      isVerified: false // Default since they didn't go through OTP
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful!',
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token: generateToken(newUser._id)
      }
    });

  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
};

// @desc    Authenticate user & get token (Login via Password)
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation: Check if fields are provided
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password.' });
    }

    // 2. Find the user by email
    const user = await User.findOne({ email });

    // 3. Check if user exists
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    // 4. Verify password by comparing entered password with the hashed password in DB
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    // 5. If everything matches, send back user data and a fresh JWT token
    res.status(200).json({
      success: true,
      message: 'Login successful!',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id) // Reuses your existing token generator
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ success: false, message: 'Server error during login.' });
  }
};