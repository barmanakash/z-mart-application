import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, Link, IconButton, Container, Alert, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'otp' (Only used for OTP flow)
  const [loginMode, setLoginMode] = useState('password'); // 'password' or 'otp'
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Validate email
  const isValidEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Handle Standard Password Login
  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: email.toLowerCase(),
        password: password
      });

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data));
        
        setMessage('✅ Sign in successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
      console.error('Password login error:', err);
    } finally {
      setLoading(false);
    }
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
      setError(err.response?.data?.message || 'Error sending OTP. Please try again.');
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
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        setMessage('✅ Sign in successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(response.data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error verifying OTP. Please try again.');
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

  const toggleLoginMode = () => {
    setError('');
    setMessage('');
    setLoginMode(loginMode === 'password' ? 'otp' : 'password');
    setStep('email');
    setOtp('');
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

          {/* LEFT PANEL: Branding & Advertisement */}
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
              to Z-Mart
            </Typography>

            <Box 
              component="img"
              src="https://via.placeholder.com/150/ff4500/ffffff?text=Z" 
              alt="Z-Mart Mascot"
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

          {/* RIGHT PANEL: Dynamic Form Content */}
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

            {/* CASE 1: Password Login View */}
            {loginMode === 'password' && (
              <form onSubmit={handlePasswordLogin}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Email Address *
                </Typography>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  type="email"
                  InputProps={{ sx: { borderRadius: '6px', backgroundColor: '#ffffff', fontSize: '0.95rem' } }}
                  sx={{ mb: 2 }}
                />

                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Password *
                </Typography>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    sx: { borderRadius: '6px', backgroundColor: '#ffffff', fontSize: '0.95rem' },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{ mb: 3 }}
                />

                <Button 
                  type="submit"
                  variant="contained" 
                  fullWidth 
                  disabled={loading || !email.trim() || !password.trim()}
                  sx={{ 
                    backgroundColor: email.trim() && password.trim() && !loading ? '#1a1a1a' : '#d3d3d3', 
                    color: '#ffffff', 
                    boxShadow: 'none',
                    borderRadius: '50px', 
                    py: 1.5, 
                    fontWeight: 700,
                    mb: 2,
                    '&:hover': email.trim() && password.trim() && !loading ? { backgroundColor: '#000000' } : {}
                  }}
                >
                  {loading ? 'LOGGING IN...' : 'LOGIN'}
                </Button>
              </form>
            )}

            {/* CASE 2: OTP Login View (Step: Email) */}
            {loginMode === 'otp' && step === 'email' && (
              <>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Email Address *
                </Typography>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  type="email"
                  InputProps={{ sx: { borderRadius: '6px', backgroundColor: '#ffffff', fontSize: '0.95rem' } }}
                  sx={{ mb: 3 }}
                />

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
                    mb: 2,
                    '&:hover': email.trim() && !loading ? { backgroundColor: '#000000' } : {}
                  }}
                >
                  {loading ? 'SENDING OTP...' : 'CONTINUE'}
                </Button>
              </>
            )}

            {/* CASE 3: OTP Login View (Step: Verification) */}
            {loginMode === 'otp' && step === 'otp' && (
              <>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Enter OTP sent to {email}
                </Typography>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  placeholder="4-Digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={loading}
                  inputProps={{ maxLength: 4, style: { textAlign: 'center', letterSpacing: '8px', fontSize: '1.2rem', fontWeight: 'bold' } }}
                  InputProps={{ sx: { borderRadius: '6px', backgroundColor: '#ffffff', fontSize: '1rem' } }}
                  sx={{ mb: 2 }}
                />

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
                    mb: 2
                  }}
                >
                  {loading ? 'VERIFYING...' : 'VERIFY & SIGN IN'}
                </Button>

                <Typography variant="body2" align="center" sx={{ color: '#666666', mb: 1 }}>
                  Didn't receive OTP?{' '}
                  <Link onClick={handleResendOtp} sx={{ color: '#1a1a1a', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    Resend OTP
                  </Link>
                </Typography>

                <Typography variant="body2" align="center" sx={{ color: '#666666' }}>
                  <Link onClick={() => { setStep('email'); setOtp(''); setError(''); }} sx={{ color: '#1a1a1a', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    Change Email
                  </Link>
                </Typography>
              </>
            )}

            {/* Global Options: Toggle Mode & Sign Up Navigation Links */}
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
              <Link 
                onClick={toggleLoginMode}
                sx={{ color: '#1a1a1a', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline', '&:hover': { color: '#000000' } }}
              >
                {loginMode === 'password' ? 'Login via OTP instead' : 'Login via Password instead'}
              </Link>

              {step === 'email' && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', mt: 1 }}>
                  <Typography variant="caption" sx={{ color: '#777777' }}>
                    New to Z-Mart?
                  </Typography>
                  <Link 
                    onClick={() => navigate('/signuppage')}
                    sx={{ 
                      px: 1.5, py: 0.4, 
                      backgroundColor: '#46cd27', color: '#ffffff', 
                      borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                      textDecoration: 'none', cursor: 'pointer',
                      '&:hover': { backgroundColor: '#3cb620' }
                    }}
                  >
                    Sign Up
                  </Link>
                </Box>
              )}
            </Box>

            {/* Legalese links */}
            <Typography variant="caption" align="center" sx={{ color: '#555555', display: 'block', mt: 3 }}>
              By proceeding, you agree to{' '}
              <Link href="/privacypolicy" underline="always" sx={{ color: '#000000', fontWeight: 700, mr: 1 }}>Privacy Policy</Link>
              <Link href="/termsandconditions" underline="always" sx={{ color: '#000000', fontWeight: 700 }}>T&C</Link>
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;