import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, Link, IconButton, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Validate email
  const isValidEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Handle email submission - Send OTP
  const handleEmailSubmit = async () => {
    setError('');
    setMessage('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/send-otp`, {
        email: email.toLowerCase()
      });

      if (response.data.success) {
        setStep('otp');
        setMessage('OTP sent to your email. Please check your inbox.');
      } else {
        setError(response.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Error sending OTP. Please check your email and try again.'
      );
      console.error('Send OTP error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleOtpVerify = async () => {
    setError('');
    setMessage('');

    if (!otp.trim()) {
      setError('Please enter the OTP');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, {
        email: email.toLowerCase(),
        otp: otp
      });

      if (response.data.success) {
        // Save token and user data to localStorage
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        setMessage('✅ Sign in successful! Redirecting...');
        
        // Redirect to home page after 1 second
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(response.data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Error verifying OTP. Please try again.'
      );
      console.error('Verify OTP error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle resend OTP
  const handleResendOtp = async () => {
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/send-otp`, {
        email: email.toLowerCase()
      });

      if (response.data.success) {
        setOtp('');
        setMessage('✅ New OTP sent to your email');
      } else {
        setError(response.data.message || 'Failed to resend OTP');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error resending OTP');
      console.error('Resend OTP error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f9f9f9',
        py: 4
      }}
    >
      <Container maxWidth="md">
        {/* Outer Login Wrapper */}
        <Card 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            boxShadow: '0px 10px 30px rgba(0,0,0,0.06)',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Top-Right Close Button */}
          <IconButton 
            sx={{ position: 'absolute', right: 16, top: 16, color: '#000000', zIndex: 10 }}
            onClick={() => window.history.back()}
          >
            <CloseIcon />
          </IconButton>

          {/* LEFT PANEL: Branding & Advertisement Promo banner */}
          <Box 
            sx={{ 
              flex: 1, 
              backgroundColor: '#000000', 
              color: '#ffffff', 
              p: 5, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: '0.5px' }}>
              Welcome
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#cccccc', mb: 3 }}>
              to Megamart
            </Typography>

            {/* Character Graphic Space */}
            <Box 
              component="img"
              src="https://via.placeholder.com/150/ff4500/ffffff?text=M" // Swap with your actual mascot artwork
              alt="Megamart Mascot"
              sx={{ width: 140, height: 'auto', my: 2, borderRadius: '50%' }}
            />

            <Typography variant="caption" sx={{ color: '#aaaaaa', mt: 2, display: 'block' }}>
              Special offer for new users
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5, color: '#ffffff' }}>
              EXTRA 15% OFF*
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaaaaa', letterSpacing: '1px', mt: 0.5 }}>
              CODE: NEWUSER
            </Typography>
            <Typography variant="caption" sx={{ color: '#666666', fontSize: '0.65rem', mt: 3 }}>
              *T&C Apply.
            </Typography>
          </Box>

          {/* RIGHT PANEL: Authentic input structure form */}
          <Box 
            sx={{ 
              flex: 1, 
              p: { xs: 4, md: 6 }, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center' 
            }}
          >
            <Typography variant="h6" align="center" sx={{ fontWeight: 700, mb: 4, color: '#1a1a1a', fontSize: '1.1rem' }}>
              Login / Sign Up
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: '6px' }}>
                {error}
              </Alert>
            )}

            {message && (
              <Alert severity="success" sx={{ mb: 2, borderRadius: '6px' }}>
                {message}
              </Alert>
            )}

            {step === 'email' ? (
              <>
                {/* Email Entry */}
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Email Address *
                </Typography>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  placeholder="Enter your Gmail or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  type="email"
                  InputProps={{
                    sx: { 
                      borderRadius: '6px',
                      backgroundColor: '#ffffff',
                      fontSize: '0.95rem',
                      '& input::placeholder': { color: '#aaaaaa', opacity: 1 }
                    }
                  }}
                  sx={{ mb: 3 }}
                />

                {/* Continue CTA */}
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={handleEmailSubmit}
                  disabled={loading || !email.trim()}
                  sx={{ 
                    backgroundColor: email.trim() && !loading ? '#1a1a1a' : '#d3d3d3', 
                    color: '#ffffff', 
                    boxShadow: 'none',
                    borderRadius: '50px', 
                    py: 1.5, 
                    fontWeight: 700,
                    mb: 3,
                    cursor: email.trim() && !loading ? 'pointer' : 'not-allowed',
                    '&:hover': email.trim() && !loading ? { backgroundColor: '#000000' } : {}
                  }}
                >
                  {loading ? 'SENDING OTP...' : 'CONTINUE'}
                </Button>
              </>
            ) : (
              <>
                {/* OTP Entry */}
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Enter OTP sent to {email}
                </Typography>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  placeholder="Enter 4-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={loading}
                  inputProps={{ maxLength: 4, style: { textAlign: 'center', letterSpacing: '8px', fontSize: '1.2rem', fontWeight: 'bold' } }}
                  InputProps={{
                    sx: { 
                      borderRadius: '6px',
                      backgroundColor: '#ffffff',
                      fontSize: '1rem'
                    }
                  }}
                  sx={{ mb: 2 }}
                />

                {/* Verify OTP CTA */}
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={handleOtpVerify}
                  disabled={loading || !otp.trim()}
                  sx={{ 
                    backgroundColor: otp.trim() && !loading ? '#1a1a1a' : '#d3d3d3', 
                    color: '#ffffff', 
                    boxShadow: 'none',
                    borderRadius: '50px', 
                    py: 1.5, 
                    fontWeight: 700,
                    mb: 2,
                    cursor: otp.trim() && !loading ? 'pointer' : 'not-allowed'
                  }}
                >
                  {loading ? 'VERIFYING...' : 'VERIFY & SIGN IN'}
                </Button>

                {/* Resend OTP */}
                <Typography variant="body2" align="center" sx={{ color: '#666666', mb: 2 }}>
                  Didn't receive OTP?{' '}
                  <Link 
                    onClick={handleResendOtp}
                    sx={{ 
                      color: '#1a1a1a', 
                      fontWeight: 700, 
                      cursor: 'pointer',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Resend OTP
                  </Link>
                </Typography>

                {/* Change Email */}
                <Typography variant="body2" align="center" sx={{ color: '#666666' }}>
                  <Link 
                    onClick={() => { setStep('email'); setOtp(''); setError(''); }}
                    sx={{ 
                      color: '#1a1a1a', 
                      fontWeight: 700, 
                      cursor: 'pointer',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Change Email
                  </Link>
                </Typography>
              </>
            )}

            {/* Legalese links */}
            <Typography variant="caption" align="center" sx={{ color: '#555555', display: 'block', mb: 4, mt: step === 'email' ? 2 : 3 }}>
              By proceeding, you agree to{' '}
              <Link href="#" underline="always" sx={{ color: '#000000', fontWeight: 700 }}>Privacy Policy</Link>
              {' '}|{' '}
              <Link href="#" underline="always" sx={{ color: '#000000', fontWeight: 700 }}>T&C</Link>
            </Typography>

            {/* Social Oauth options - Only on email step */}
            {step === 'email' && (
              <>
                <Typography variant="caption" align="center" sx={{ color: '#777777', display: 'block', mb: 2 }}>
                  Or Log in with
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <IconButton 
                    sx={{ 
                      border: '1px solid #e0e0e0', 
                      p: 1.2,
                      '&:hover': { backgroundColor: '#f5f5f5' }
                    }}
                  >
                    <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/web-24dp/logo_googleg_color_1x_web_24dp.png" alt="Google" width="20" />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      border: '1px solid #e0e0e0', 
                      p: 1.2,
                      '&:hover': { backgroundColor: '#f5f5f5' }
                    }}
                  >
                    {/* Embedded Mini Facebook SVG asset to align seamlessly */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </IconButton>
                </Box>
              </>
            )}
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;