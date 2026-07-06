import React, { useState, useEffect } from 'react';
import { Container, Box, Chip, Typography, Button } from '@mui/material';
import { useWishlist } from './wishlistcontext';

const SLIDE_DATA = [
  {
    id: 'b2g2',
    label: 'B2G2',
    title: 'BUY 2 GET 2\nFREE',
    subtitle: 'Season Clearance Sale',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'deal-zone',
    label: 'DEAL ZONE',
    title: 'BUY 2 AT\n₹2499',
    subtitle: 'Daily Denim Essentials',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'megapass',
    label: 'MEGAPASS AT ₹149',
    title: 'MEGAPASS\nEXCLUSIVE',
    subtitle: 'Unlock Free Shipping & Extra 10% Off',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=80',
  }
];

const pillButtonStyle = {
  borderRadius: '50px',
  borderColor: '#000000',
  color: '#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderColor: '#000000',
  }
};

export default function AutoPlayCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { addToCartFromLanding } = useWishlist();

  // ⏱️ Auto-play logic block
  useEffect(() => {
    // Set up a timer to change slides every 4000ms (4 seconds)
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === SLIDE_DATA.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    // CRITICAL: Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  const currentSlide = SLIDE_DATA[activeIndex];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
      
      {/* Top Chip Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        {SLIDE_DATA.map((slide, index) => (
          <Chip 
            key={slide.id}
            label={slide.label} 
            onClick={() => setActiveIndex(index)} 
            sx={{ 
              fontWeight: 700, 
              bgcolor: activeIndex === index ? '#000000' : '#f0f0f0', 
              color: activeIndex === index ? '#ffffff' : '#000000', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { bgcolor: activeIndex === index ? '#333333' : '#e0e0e0' }
            }} 
          />
        ))}
      </Box>

      {/* Main Banner Window */}
      <Box 
        sx={{ 
          width: '100%', 
          height: { xs: 280, md: 440 }, 
          backgroundImage: `url('${currentSlide.image}')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          pr: { xs: 4, md: 12 },
          position: 'relative',
          // Added a fade effect when background image changes
          transition: 'background-image 0.5s ease-in-out', 
        }}
      >
        {/* Dynamic Slide Content */}
        <Box sx={{ textAlign: 'left', maxWidth: 450 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              color: '#000000', 
              lineHeight: 1.1, 
              mb: 1, 
              fontSize: { xs: '2rem', md: '3.8rem' },
              whiteSpace: 'pre-line' 
            }}
          >
            {currentSlide.title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#333333', mb: 3, fontWeight: 500, fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
            {currentSlide.subtitle}
          </Typography>
          <Button
            variant="outlined"
            sx={pillButtonStyle}
            onClick={() => addToCartFromLanding({ title: currentSlide.id, desc: currentSlide.title, price: 1499, img: currentSlide.image })}
          >
            SHOP NOW
          </Button>
        </Box>

        {/* Carousel Dot Indicators */}
        <Box sx={{ position: 'absolute', bottom: 15, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
          {SLIDE_DATA.map((_, index) => (
            <Box 
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{ 
                cursor: 'pointer',
                borderRadius: '4px', 
                bgcolor: activeIndex === index ? '#888888' : '#cccccc', 
                width: activeIndex === index ? 24 : 8, 
                height: 8,
                transition: 'all 7s ease'
              }} 
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}