import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Fab } from '@mui/material';

// Icons based on image_551ae3.png
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { Link } from 'react-router-dom';


// Custom X (formerly Twitter) Icon to match the image precisely
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionHeadingStyle = {
    fontWeight: 700,
    fontSize: '0.95rem',
    color: '#1a1a1a',
    mb: 3,
    letterSpacing: '0.5px',
  };

  const linkStyle = {
    display: 'block',
    color: '#555555',
    textDecoration: 'none',
    fontSize: '0.9rem',
    mb: 2,
    fontFamily: '"Inter", "Roboto", sans-serif',
    '&:hover': {
      color: '#000000',
    },
  };

  const contactRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    color: '#555555',
    fontSize: '0.9rem',
    mb: 2.5,
  };

  return (
    <Box component="footer" sx={{ bgcolor: '#ffffff', pt: 7, pb: 4, position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Column 1: Top Categories */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle1" sx={sectionHeadingStyle}>
              TOP CATEGORIES
            </Typography>
            <Link href="/men" sx={linkStyle}>Men</Link>
            <Link href="/women" sx={linkStyle}>Women</Link>
            <Link href="/kids" sx={linkStyle}>Kids</Link>
            <Link href="/footwear" sx={linkStyle}>Footwear</Link>
            <Link href="/innerwear" sx={linkStyle}>Innerwear</Link>
            <Link href="/accessories" sx={linkStyle}>Accessories</Link>
          </Grid>

          {/* Column 2: Top Brands */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle1" sx={sectionHeadingStyle}>
              TOP BRANDS
            </Typography>
            <Link href="/uspolobrandscloths" sx={linkStyle}>U.S. Polo Assn.</Link>
            <Link href="/arrowcloths" sx={linkStyle}>Arrow</Link>
            <Link href="/flyingmachine" sx={linkStyle}>Flying Machine</Link>
            <Link href="/tommyhilfiger" sx={linkStyle}>Tommy Hilfiger</Link>
            <Link href="/clavineklein" sx={linkStyle}>Calvin Klein</Link>
            <Link href="/adbyarvindcloth" sx={linkStyle}>AD By Arvind</Link>
          </Grid>

          {/* Column 3: Useful Links */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" sx={sectionHeadingStyle}>
              USEFUL LINKS
            </Typography>
            <Link href="/aboutuspage" sx={linkStyle}>About Us</Link>
            <Link href="/privacypolicy" sx={linkStyle}>Privacy Policy</Link>
            <Link href="/termsandconditions" sx={linkStyle}>Terms and Conditions</Link>
            <Link href="/returnandcancalltionpolicy" sx={linkStyle}>Returns and Cancellation policy</Link>
            <Link href="/helpandfaq" sx={linkStyle}>Help and FAQ's</Link>
            <Link href="/deliveryandshippingpolicy" sx={linkStyle}>Delivery and Shipping Policy</Link>
            <Link href="/sitemap" sx={linkStyle}>Sitemap</Link>
          </Grid>

          {/* Column 4: Contact Us */}
          <Grid item xs={12} sm={6} md={2.6}>
            <Typography variant="subtitle1" sx={sectionHeadingStyle}>
              CONTACT US
            </Typography>
            <Box sx={contactRowStyle}>
              <CallOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '1.3rem' }} />
              <Typography variant="body2">+91-1234567890</Typography>
            </Box>
            <Box sx={contactRowStyle}>
              <MailOutlineOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '1.3rem' }} />
              <Link href="mailto:care@megamartfashions.com" sx={{ ...linkStyle, mb: 0 }}>
                care@zmart.com
              </Link>
            </Box>
            <Box sx={contactRowStyle}>
              <ChatBubbleOutlineOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '1.3rem', marginBottom:"10px" }} />
              <Link href="/message" sx={linkStyle} >Message Us</Link>
            </Box>
          </Grid>

          {/* Column 5: App Download & Social Media */}
          <Grid item xs={12} sm={6} md={2.6}>
            <Typography variant="subtitle1" sx={sectionHeadingStyle}>
              DOWNLOAD THE APP
            </Typography>
            
            {/* App Badges Stacked Horizontally */}
            <Box sx={{ display: 'flex', gap: 1.5, mb: 4, flexWrap: 'wrap' }}>
              {/* Google Play Store Badge Replica */}
              <Link href="https://play.google.com" target="_blank" rel="noreferrer">
                <Box 
                  component="img" 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  sx={{ height: 42, width: 'auto', cursor: 'pointer' }}
                />
              </Link>
              {/* Apple App Store Badge Replica */}
              <Link href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <Box 
                  component="img" 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Available on the App Store" 
                  sx={{ height: 42, width: 'auto', cursor: 'pointer' }}
                />
              </Link>
            </Box>

            {/* Follow Us Section */}
            <Typography variant="subtitle1" sx={sectionHeadingStyle}>
              FOLLOW US
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5, ml: -1 }}>
              <IconButton href="#" sx={{ color: '#1a1a1a' }}><InstagramIcon fontSize="small" /></IconButton>
              <IconButton href="#" sx={{ color: '#1a1a1a' }}><YouTubeIcon fontSize="small" /></IconButton>
              <IconButton href="#" sx={{ color: '#1a1a1a' }}><XIcon /></IconButton>
              <IconButton href="#" sx={{ color: '#1a1a1a' }}><FacebookIcon fontSize="small" /></IconButton>
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* Thin Horizontal Divider line */}
      <Box sx={{ borderTop: '1px solid #e0e0e0', mt: 6, pt: 3, pb: 1, textAlign: 'center', width: '100%' }}>
        <Typography variant="caption" sx={{ color: '#777777', fontSize: '0.8rem' }}>
          © 2025 Megamart. All Rights Reserved.
        </Typography>
      </Box>

      {/* Floating Back to Top Square Action Button */}
      <Fab 
        onClick={scrollToTop}
        size="small"
        sx={{ 
          position: 'absolute', 
          right: 24, 
          bottom: 36, 
          bgcolor: '#222222', 
          color: '#ffffff',
          borderRadius: '4px', // Hard rectangular corners precisely matching image_551ae3.png
          boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
          '&:hover': {
            bgcolor: '#000000'
          }
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default Footer;