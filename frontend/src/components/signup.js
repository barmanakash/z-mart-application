import React, { useState } from 'react';
import { Box, styled, Typography, Grid, Button, TextField, Checkbox, FormControlLabel, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function SignUp() {
    const navigate = useNavigate();
    
    // Form Input States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Operational Feedback States
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        // 1. Basic Frontend Fields Validations
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('Please fill in all input fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        if (!termsAccepted) {
            setError('You must accept the terms of service and privacy policy to proceed.');
            return;
        }

        setLoading(true);
        try {
            // 2. Dispatch Payload to backend signup endpoint
            const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                password: password,
                confirmPassword: confirmPassword
            });

            if (response.data.success) {
                setMessage('✅ Account registration successful! Redirecting to login page...');
                
                // Clear state fields
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setTermsAccepted(false);

                // 3. Navigation redirect to login route
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An operational error occurred during registration.');
            console.error('Signup submit handling error:', err);
        } finally {
            setLoading(false);
        }
    };

    const SignupPage = () => {
        return (
            <MainBox>
                <Grid container sx={{ minHeight: '100vh', overflow: 'hidden', borderRadius: "100px" }}>
                    
                    {/* LEFT SIDE: Graphic Illustration Container */}
                    <ImageSection item xs={12} md={5.5}>
                        {/* Curved Wave Separator for Desktop Screens */}
                        <WaveContainer>
                            <svg 
                                viewBox="0 0 100 100" 
                                preserveAspectRatio="none" 
                                style={{ width: '100%', height: '100%', fill: '#D3E2EE' }}
                            >
                                <path d="M0,0 Q60,30 20,60 T100,100 L100,0 Z" transform="scale(-1, 1) translate(-100, 0)" />
                            </svg>
                        </WaveContainer>
                    </ImageSection>

                    {/* RIGHT SIDE: Interactive Form Panel */}
                    <FormSection item xs={12} md={6.5}>
                        <FormWrapper component="form" onSubmit={handleSignupSubmit}>
                            
                            {/* Greetings Section */}
                            <Typography variant="h5" sx={{ fontWeight: 500, color: '#334E68', mb: 0.5 }}>
                                Hello ! Welcome Z-mart
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#486581', mb: 3, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                We are Glad to see you 😊❤️
                            </Typography>

                            {/* Status and Error Alert Blocks */}
                            {error && (
                                <Alert severity="error" sx={{ mb: 2, borderRadius: '8px' }}>
                                    {error}
                                </Alert>
                            )}
                            {message && (
                                <Alert severity="success" sx={{ mb: 2, borderRadius: '8px' }}>
                                    {message}
                                </Alert>
                            )}

                            {/* Third-Party Social Sign-Up Actions */}
                            <Grid container spacing={2} sx={{ mb: 4 }}>
                                <Grid item xs={6}>
                                    <GoogleAuthButton
                                        fullWidth
                                        variant="contained"
                                        startIcon={<GoogleIcon sx={{ color: '#000' }} />}
                                    >
                                        Sign up with Google
                                    </GoogleAuthButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <SocialIconButton fullWidth variant="contained">
                                        <FacebookIcon />
                                    </SocialIconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <SocialIconButton fullWidth variant="contained">
                                        <XIcon fontSize="small"/>
                                    </SocialIconButton>
                                </Grid>
                            </Grid>

                            {/* Decorative Separator */}
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                <DividerLine />
                                <Typography variant="body2" sx={{ mx: 2, color: '#627D98' }}>or</Typography>
                                <DividerLine />
                            </Box>

                            {/* Main Input Form Controls */}
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Name</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={loading}
                                    />
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Email Address</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="example@email.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Password</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        type="password"
                                        variant="outlined"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Confirm Password</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        type="password"
                                        variant="outlined"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </Grid>
                            </Grid>

                            {/* User Legal Agreement Opt-in */}
                            <Box sx={{ mt: 3, mb: 4 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={termsAccepted}
                                            onChange={(e) => setTermsAccepted(e.target.checked)}
                                            disabled={loading}
                                            sx={{ 
                                                color: '#BAC7D5',
                                                '&.Mui-checked': { color: '#486581' },
                                                '& .MuiSvgIcon-root': { borderRadius: 4 }
                                            }} 
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" sx={{ color: '#486581' }}>
                                            I agree terms of service and privacy policy
                                        </Typography>
                                    }
                                />
                            </Box>

                            {/* Core Action Submission Control */}
                            <SubmitButton type="submit" variant="contained" disabled={loading}>
                                {loading ? 'Signing up...' : 'Sign up'}
                            </SubmitButton>

                        </FormWrapper>
                    </FormSection>
                </Grid>
            </MainBox>
        )
    }

    return (
        <>
            {SignupPage()}
        </>
    )
}

export default SignUp;


/* ==========================================
   STYLING DECLARATIONS (MUI styled components)
   ========================================== */

const MainBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  width: "100%",
  minHeight: "100vh",
  borderRadius: "10px", 
  overflow: "hidden"
});

const ImageSection = styled(Grid)({
    position: 'relative',
    backgroundImage: `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (max-width: 900px)': {
        minHeight: '30vh',
    }
});

const WaveContainer = styled(Box)({
    display: 'block',
    position: 'absolute',
    right: -2,
    top: 0,
    bottom: 0,
    width: '80px',
    zIndex: 2,
    pointerEvents: 'none',
    '@media (max-width: 900px)': {
        display: 'none',
    }
});

const FormSection = styled(Grid)({
    backgroundColor: '#D3E2EE', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '32px',
    '@media (min-width: 600px)': { padding: '48px' },
    '@media (min-width: 900px)': { padding: '64px' }
});

const FormWrapper = styled(Box)({
    width: '100%', 
    maxWidth: 550,
});

const GoogleAuthButton = styled(Button)({
    backgroundColor: '#F7F5F0',
    color: '#627D98',
    textTransform: 'none',
    borderRadius: '50px',
    paddingTop: '12px',
    paddingBottom: '12px',
    boxShadow: 'none',
    '&:hover': { 
        backgroundColor: '#EAE7E0', 
        boxShadow: 'none' 
    }
});

const SocialIconButton = styled(Button)({
    backgroundColor: '#F7F5F0',
    color: '#000',
    borderRadius: '50px',
    paddingTop: '12px',
    paddingBottom: '12px',
    minWidth: 0,
    boxShadow: 'none',
    '&:hover': { 
        backgroundColor: '#EAE7E0', 
        boxShadow: 'none' 
    }
});

const DividerLine = styled(Box)({
    flex: 1, 
    height: '1px', 
    backgroundColor: '#BAC7D5'
});

const FieldLabel = styled(Typography)({
    marginBottom: '8px', 
    fontWeight: 500, 
    color: '#334E68',
    fontSize: '0.875rem'
});

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
        backgroundColor: '#F7F5F0',
        '& fieldset': { 
            border: 'none' 
        }
    }
});

const SubmitButton = styled(Button)({
    backgroundColor: '#F7F5F0',
    color: '#627D98',
    textTransform: 'none',
    borderRadius: '50px',
    paddingLeft: '48px',
    paddingRight: '48px',
    paddingTop: '12px',
    paddingBottom: '12px',
    fontWeight: 500,
    boxShadow: 'none',
    '&:hover': { 
        backgroundColor: '#EAE7E0', 
        boxShadow: 'none' 
    },
    '&:disabled': {
        backgroundColor: '#EAE7E0',
        color: '#A0AEC0'
    }
});