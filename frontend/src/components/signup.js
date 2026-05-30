import React from 'react';
import { Box, styled, Typography, Grid, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function SignUp() {

    const SignupPage = () => {
        return (
            <MainBox>
                <Grid container sx={{ minHeight: '100vh', overflow: 'hidden', borderRadius:"100px" }}>
                    
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
                        <FormWrapper>
                            
                            {/* Greetings Section */}
                            <Typography variant="h5" sx={{ fontWeight: 500, color: '#334E68', mb: 0.5 }}>
                                Hello ! Welcome Z-mart
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#486581', mb: 4, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                We are Glad to see you 😊❤️
                            </Typography>

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
                                    />
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Email Address</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="example@email.com"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Password</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        type="password"
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FieldLabel>Confirm Password</FieldLabel>
                                    <CustomTextField
                                        fullWidth
                                        type="password"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>

                            {/* User Legal Agreement Opt-in */}
                            <Box sx={{ mt: 3, mb: 4 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox 
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
                            <SubmitButton variant="contained">
                                Sign up
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
  overflow: "hidden" // Added this to enforce the border-radius clipping
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
    }
});