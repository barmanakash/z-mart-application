const express = require('express');
const router = express.Router();
const { sendOTP, verifyOTP, getUser, registerUser, loginUser } = require('../controllers/authController');

// Send OTP to email
router.post('/send-otp', sendOTP);

// Verify OTP and authenticate
router.post('/verify-otp', verifyOTP);

// Get current user (protected route)
router.get('/user', getUser);

// Define the signup route
router.post('/signup', registerUser);

router.post('/login', loginUser);

module.exports = router;
