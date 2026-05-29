const express = require('express');
const router = express.Router();
const { sendOTP, verifyOTP, getUser } = require('../controllers/authController');

// Send OTP to email
router.post('/send-otp', sendOTP);

// Verify OTP and authenticate
router.post('/verify-otp', verifyOTP);

// Get current user (protected route)
router.get('/user', getUser);

module.exports = router;
