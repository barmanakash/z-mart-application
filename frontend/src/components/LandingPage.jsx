import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Chip,
  TextField,
  InputAdornment
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import viratImg from '../assets/virat.jpg';
import DressImage from '../assets/dressA.jpg';
import DressImageA from '../assets/dressB.jpg';
import DressImageB from '../assets/DressC.jpg';
import DressImageC from '../assets/DressD.jpg';
import DressImageD from '../assets/DressE.jpg';
import DressImageE from '../assets/DressF.jpg';
import DressImageG from '../assets/DressG.jpg';
import MenImage from '../assets/man.jpg';
import Hardik from '../assets/hardik.jpg'
import Mantoo from '../assets/mantoo.jpg'
import Manthree from '../assets/menthree.jpg'
import ManFor from '../assets/manfor.jpg'
import ManFive from '../assets/manfive.jpg'
import Corousel from '../components/corousel'
import Men from '../components/men'
import Flying from '../assets/flying.jpg'
import BlackSmartBoy from '../assets/blacksmartbot.jpg'
import SmartBot from '../assets/smartboy.jpg'
import WhiteandBlue from '../assets/whiteandbluejeanse.jpg'
import GreenShirtman from '../assets/grrenshirtman.jpg'
import { useWishlist } from './wishlistcontext';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * Reveal — lightweight scroll-triggered animation wrapper.
 * Uses IntersectionObserver (no extra dependency). Fires once when the
 * element enters the viewport, then stops observing.
 * Pure presentational wrapper — does not touch any app logic.
 */
const Reveal = ({ children, delay = 0, y = 24, style, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      {...rest}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 3.5s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 3.5s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

const LandingPage = () => {
  // Local active index states for custom sliders/tickers
  const [valFindsOffset, setValFindsOffset] = useState(0);

  // Styling Preset Constants
  const sectionTitleStyle = {
    fontWeight: 800,
    fontSize: { xs: '1.4rem', md: '1.8rem' },
    letterSpacing: '2px',
    textAlign: 'center',
    textTransform: 'uppercase',
    mb: 4,
    color: '#000000',
    fontFamily: '"Inter", sans-serif',
    // backgroundColor:"red"
  };

  const pillButtonStyle = {
    color: '#000000',
    borderColor: '#000000',
    borderRadius: '50px',
    px: 4,
    py: 1,
    fontWeight: 700,
    fontSize: '0.85rem',
    borderWidth: '1.5px',
    transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1), background-color 0.2s ease',
    '&:hover': { borderWidth: '1.5px', bgcolor: 'rgba(0,0,0,0.04)', borderColor: '#000000', transform: 'translateY(-2px)' },
    '&:active': { transform: 'translateY(0px) scale(0.97)' },
  };

  // Shared image-zoom-on-hover wrapper (image split into absolutely-positioned layer)
  const zoomLayerStyle = {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
    zIndex: 0,
  };
  const handleZoomEnter = (e) => { e.currentTarget.style.transform = 'scale(1.08)'; };
  const handleZoomLeave = (e) => { e.currentTarget.style.transform = 'scale(1)'; };

  const { toggleWishlist, isWishlisted } = useWishlist();

  const products = [
    { brand: 'FLYING MACHINE', desc: 'Slash Slim Tapered Stone Wash', price: '1487.38', oldPrice: '2399.00', discount: '38% Off', img: Flying },
    { brand: 'FLYING MACHINE', desc: 'Mid Rise Bootcut Jeans', price: '1797.38', oldPrice: '2899.00', discount: '38% Off', img: BlackSmartBoy },
    { brand: 'ARROW', desc: 'Cotton Linen Slim Fit Shirt', price: '1699.32', oldPrice: '2499.00', discount: '32% Off', img: SmartBot },
    { brand: 'U.S. POLO ASSN. WOMEN', desc: 'High Rise Wide Leg Cut & Sew', price: '2024.25', oldPrice: '2699.00', discount: '25% Off', img: WhiteandBlue },
    { brand: 'U.S. POLO ASSN.', desc: 'Striped Collar Solid Polo Shirt', price: '1259.30', oldPrice: '1799.00', discount: '30% Off', img: GreenShirtman }
  ];

  const { addToCart } = useWishlist();
  const { addToCartFromLanding } = useWishlist();

  // Generic handlers used by many SHOP NOW buttons
  const handleShopNow = (product) => {
    // product can be a minimal object; addToCartFromLanding will normalize
    addToCartFromLanding(product);
  };

  // Buy 1 Get 1 handler — add two quantities of the product
  const handleBuy1Get1 = (product) => {
    addToCartFromLanding(product);
    addToCartFromLanding(product);
  };

  // Signature interaction: subtle mouse-follow tilt on Hot Picks cards
  const handleTiltMove = (e, baseTransform) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const tiltX = (py * -8).toFixed(2);
    const tiltY = (px * 8).toFixed(2);
    card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
  };
  const handleTiltLeave = (e, baseTransform) => {
    e.currentTarget.style.transform = baseTransform;
  };

  const renderHotPicksGrid = (items, keyPrefix) => (
    <Grid container spacing={3} justifyContent="center">
      {items.map((item, index) => {
        const baseTransform = item.clear ? 'none' : 'perspective(800px) rotateY(10deg)';
        return (
          <Grid item xs={6} sm={4} md={2.4} key={`${keyPrefix}-${index}`}>
            <Reveal delay={index * 0.06} y={30}>
              <Box
                onMouseMove={(e) => handleTiltMove(e, baseTransform)}
                onMouseLeave={(e) => handleTiltLeave(e, baseTransform)}
                sx={{
                  position: 'relative',
                  height: 280,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  transform: baseTransform,
                  boxShadow: '0px 10px 25px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease-out, box-shadow 0.2s ease',
                  willChange: 'transform',
                  '&:hover': {
                    boxShadow: '0px 20px 35px rgba(0,0,0,0.6)',
                  },
                  '&:hover .hotpick-overlay': { opacity: 1 },
                  '&:hover .hotpick-btn': {
                    bgcolor: 'rgba(255,255,255,0.35)',
                    transform: 'scale(1.08)',
                  },
                }}
              >
                <Box
                  className="hotpick-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0,0,0,0.15)',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                    pointerEvents: 'none',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    mb: 1,
                    textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                  }}
                >
                  {item.category}
                </Typography>
                <Button
                  className="hotpick-btn"
                  variant="contained"
                  size="small"
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    borderRadius: '20px',
                    transition: 'transform 0.15s ease, background-color 0.15s ease',
                  }}
                  onClick={() => handleShopNow({ title: item.category, desc: item.category, price: 1299, img: item.img })}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Reveal>
          </Grid>
        );
      })}
    </Grid>
  );

  const hotPicksItems = [
    { category: 'BRIEFS', img: DressImage },
    { category: 'TRUNKS', img: DressImageC },
    { category: 'BELTS', img: DressImageD, clear: true },
    { category: 'CAPS', img: DressImageG },
    { category: 'HANDBAGS', img: DressImageE },
    { category: 'HANDBAGS', img: DressImageE },
    { category: 'CAPS', img: DressImageG },
    { category: 'CAPS', img: DressImageG },
    { category: 'CAPS', img: DressImageG },
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', bgcolor: '#ffffff', marginTop: '' }}>

      {/* 1. TOP OFFER BANNER STICK (image_560aa5.jpg Reference) */}
      <Box sx={{ bgcolor: '#095f11', color: '#ffffff', py: 1, textAlign: 'center', position: 'relative' }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px' }}>
          *** 15% OFF For New Users ***
        </Typography>
      </Box>

      {/* 2. SUB-HEADER NAVIGATION MARGIN LINKS (image_560aa5.jpg Reference) */}
      <Men />
      <Corousel />
      {/* 4. "EXPLORE MORE" CIRCULAR CATEGORIES (image_5607e2.jpg Reference) */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Reveal>
          <Typography sx={sectionTitleStyle}>Explore More</Typography>
        </Reveal>
        <Grid container spacing={2} justifyContent="center">
          {[
            { name: 'Megapass', img: viratImg, color: '#dc2626' },
            { name: 'BESTSELLERS', img: viratImg },
            { name: 'POLO SHIRTS', img: viratImg },
            { name: 'SHIRTS', img: viratImg },
            { name: 'JEANS', img: viratImg },
            { name: 'SNEAKERS', img: viratImg },
          ].map((item, idx) => (
            <Grid item xs={4} sm={3} md={2} key={idx} sx={{ textAlign: 'center' }}>
              <Reveal delay={idx * 0.06} y={20}>
                <Box
                  sx={{
                    width: { xs: 90, md: 140 },
                    height: { xs: 90, md: 140 },
                    borderRadius: '12px',
                    margin: '0 auto',
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
                    mb: 1.5,
                    cursor: 'pointer',
                    transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.06)',
                      boxShadow: '0px 12px 22px rgba(0,0,0,0.18)',
                    },
                  }}
                />
                <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: item.color || '#000000', letterSpacing: '0.5px' }}>
                  {item.name}
                </Typography>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. BRAND DISCOUNTS INTEGRATION HEADER GRID (image_560aa5.jpg & image_560ac8.jpg Reference) */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Reveal>
              <Box sx={{ position: 'relative', height: 350, overflow: 'hidden', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Box
                  sx={{ ...zoomLayerStyle, backgroundImage: `url(${Hardik})` }}
                  onMouseEnter={handleZoomEnter}
                  onMouseLeave={handleZoomLeave}
                />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#000000' }}>MIN. 30% OFF</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      sx={pillButtonStyle}
                      onClick={() => handleShopNow({ title: 'MIN30 - Hardik', desc: 'MIN. 30% OFF', price: 1499, img: Hardik })}
                    >
                      SHOP NOW
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          </Grid>
          <Grid item xs={12} md={8}>
            <Reveal delay={0.1}>
              <Box sx={{ position: 'relative', height: 350, overflow: 'hidden', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "Red" }}>
                <Box
                  sx={{ ...zoomLayerStyle, backgroundImage: `url(${MenImage})` }}
                  onMouseEnter={handleZoomEnter}
                  onMouseLeave={handleZoomLeave}
                />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: '#000000', letterSpacing: '1px' }}>UP TO 55% OFF</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#000000',
                        color: '#ffffff',
                        borderRadius: '50px',
                        px: 4,
                        py: 1,
                        fontWeight: 700,
                        transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1), background-color 0.2s ease',
                        '&:hover': { bgcolor: '#222222', transform: 'translateY(-2px)' },
                        '&:active': { transform: 'translateY(0) scale(0.97)' },
                      }}
                      onClick={() => handleShopNow({ title: 'UPTO55 - Men', desc: 'UP TO 55% OFF', price: 1999, img: MenImage })}
                    >
                      SHOP NOW
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          </Grid>
        </Grid>

        {/* Triple Cluster Secondary Row (image_560ac8.jpg Reference) */}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {[
            { img: Mantoo, label: 'FLAT 40% OFF', title: 'FLAT40 - BRIEFS', desc: 'FLAT 40% OFF', price: 1099 },
            { img: Manthree, label: 'UP TO 50% OFF', title: 'UPTO50 - JEANS', desc: 'UP TO 50% OFF', price: 1299 },
            { img: ManFor, label: 'LATEST TRENDS', title: 'LATEST TRENDS', desc: 'LATEST TRENDS', price: 1599 },
          ].map((block, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Reveal delay={idx * 0.1}>
                <Box sx={{ position: 'relative', height: 300, overflow: 'hidden', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
                  <Box
                    sx={{ ...zoomLayerStyle, backgroundImage: `url(${block.img})` }}
                    onMouseEnter={handleZoomEnter}
                    onMouseLeave={handleZoomLeave}
                  />
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff' }}>{block.label}</Typography>
                    <Box sx={{ mb: 1 }}>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          bgcolor: '#000000',
                          color: '#ffffff',
                          fontSize: '0.7rem',
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'scale(1.08)' },
                          '&:active': { transform: 'scale(0.96)' },
                        }}
                        onClick={() => handleShopNow({ title: block.title, desc: block.desc, price: block.price, img: block.img })}
                      >
                        SHOP NOW
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 6. "HOT PICKS" — 3D SKEWED PERSPECTIVE PROMO CARDS, mouse-tilt signature interaction */}
      <Box sx={{ bgcolor: '#000000', py: 8, mb: 8 }}>
        <Container maxWidth="xl">
          <Reveal>
            <Typography sx={[sectionTitleStyle, { color: '#ffffff' }]}>Hot Picks</Typography>
          </Reveal>
          {renderHotPicksGrid(hotPicksItems, 'hp1')}
        </Container>
      </Box>

      {/* 7. KIDS FASHION SUB-HERO SPLIT BLOCK (image_560b07.jpg Reference) */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Reveal>
          <Box sx={{ position: 'relative', width: '100%', height: 320, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: { xs: 4, md: 10 } }}>
            <Box
              sx={{ ...zoomLayerStyle, backgroundImage: `url(${ManFive})` }}
              onMouseEnter={handleZoomEnter}
              onMouseLeave={handleZoomLeave}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 900, color: '#000000', mb: 0.5, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
                UP TO 55% OFF
              </Typography>
              <Typography sx={{ color: '#333333', mb: 3, fontWeight: 600, letterSpacing: '1px' }}>
                Fun styles for kids
              </Typography>
              <Box>
                <Button variant="outlined" sx={pillButtonStyle} onClick={() => handleShopNow({ title: 'Kids - Fun styles', desc: 'Fun styles for kids', price: 999, img: ManFive })}>
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Container>

      {/* 8. "HOT PICKS" second block — same signature tilt interaction, reused via renderHotPicksGrid */}
      <Box sx={{ bgcolor: '#000000', py: 8, mb: 8 }}>
        <Container maxWidth="xl">
          <Reveal>
            <Typography sx={[sectionTitleStyle, { color: '#ffffff' }]}>Hot Picks</Typography>
          </Reveal>
          {renderHotPicksGrid(hotPicksItems, 'hp2')}
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Reveal>
          <Typography sx={sectionTitleStyle}>Featured Products</Typography>
        </Reveal>
        <Grid container spacing={3}>
          {products.map((prod, idx) => {
            const favorited = isWishlisted(prod);

            return (
              <Grid item xs={12} sm={6} md={2.4} key={idx}>
                <Reveal delay={idx * 0.06}>
                  <Card
                    sx={{
                      boxShadow: 'none',
                      border: '1px solid #e0e0e0',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0px 14px 28px rgba(0,0,0,0.12)',
                      },
                      '&:hover .quick-add': { opacity: 1 },
                      '&:hover .product-img': { transform: 'scale(1.06)' },
                    }}
                  >

                    {/* Wishlist Button */}
                    <IconButton
                      onClick={() => toggleWishlist(prod)}
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 2,
                        bgcolor: 'rgba(255,255,255,0.7)',
                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.9)', transform: 'scale(1.15)' }
                      }}
                    >
                      {favorited ? (
                        <FavoriteIcon fontSize="small" sx={{ color: '#dc2626' }} /> // Red filled heart
                      ) : (
                        <FavoriteBorderIcon fontSize="small" /> // Empty heart
                      )}
                    </IconButton>

                    <Box sx={{ overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="280"
                        image={prod.img}
                        alt="product"
                        className="product-img"
                        sx={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
                      />
                    </Box>
                    <CardContent sx={{ p: 2 }}>
                      <Typography sx={{ fontWeight: 800, fontSize: '0.85rem' }}>{prod.brand}</Typography>
                      <Typography noWrap sx={{ color: '#666666', fontSize: '0.75rem', mb: 1 }}>{prod.desc}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontWeight: 800, fontSize: '0.9rem' }}>₹{prod.price}</Typography>
                        <Typography sx={{ textDecoration: 'line-through', color: '#999999', fontSize: '0.75rem' }}>₹{prod.oldPrice}</Typography>
                        <Typography sx={{ color: '#dc2626', fontWeight: 700, fontSize: '0.75rem' }}>{prod.discount}</Typography>
                      </Box>
                      <Chip
                        label="Buy 1 Get 1"
                        size="small"
                        onClick={() => handleBuy1Get1(prod)}
                        sx={{
                          mt: 1,
                          bgcolor: '#000000',
                          color: '#ffffff',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          height: 20,
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, background-color 0.2s ease',
                          '&:hover': { bgcolor: '#333333', transform: 'scale(1.06)' },
                          '&:active': { transform: 'scale(0.95)' },
                        }}
                      />
                    </CardContent>
                  </Card>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        {/* Centered the header text as well to match the layout */}
        <Reveal>
          <Typography sx={{ ...sectionTitleStyle, textAlign: 'center', mb: 4 }}>
            Our Customers Love Us
          </Typography>
        </Reveal>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: { xs: 'flex-start', md: 'center' },
            overflowX: 'auto',
            pb: 2,
            px: { xs: 2, md: 0 },
            '&::-webkit-scrollbar': { height: '6px' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#e0e0e0', borderRadius: '4px' }
          }}
        >
          {[
            { name: 'Samantha D.', review: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer.' },
            { name: 'Shabna Arun, Bangalore', review: 'My favourite Megamart (known for its Buy 5 Get 5 deals) is finally online! Picked up U.S. Polo, Tommy and CK at amazing prices. Perfect fit.' },
            { name: 'Yashwant, Hyderabad', review: 'I used to shop from Megamart stores, but the new website is even better. The offers are crazy good. Picked up a Calvin Klein tee.' }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Box
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  p: 2.5,
                  width: { xs: '280px', sm: '320px' },
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 12px 22px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', color: '#facc15', mb: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: '1rem' }} />
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#555555', lineHeight: 1.5, fontSize: '0.8rem', mb: 2 }}>
                    "{item.review}"
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#000000' }}>
                  {item.name}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>

      {/* 11. PARTNER BRANDS CATALOG DIRECTORY GRID (image_560b66.jpg & image_560b85.jpg Reference) */}
      <Box sx={{ borderTop: '1px solid #e0e0e0', py: 6, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ textAlign: 'center', opacity: 0.8 }}>
            {['U.S. POLO ASSN.', 'ARROW', 'TOMMY HILFIGER', 'Calvin Klein', 'FLYING MACHINE'].map((brandName, idx) => (
              <Grid item xs={6} sm={4} md={2.4} key={idx}>
                <Reveal delay={idx * 0.05} y={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Georgia", serif',
                      fontWeight: 700,
                      color: '#222222',
                      letterSpacing: '1px',
                      display: 'inline-block',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                      '&:hover': { transform: 'scale(1.08)', color: '#000000' },
                    }}
                  >
                    {brandName}
                  </Typography>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 12. "CONNECT WITH US" NEWSLETTER SUBSCRIPTION FOOTER STRIP (image_560b85.jpg Reference) */}
      <Box sx={{ bgcolor: '#1a1a1a', color: '#ffffff', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Reveal>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, letterSpacing: '1px' }}>CONNECT WITH US</Typography>
            <Typography variant="body2" sx={{ color: '#aaaaaa', mb: 4 }}>
              Be the first to know about new products, exclusive collections, latest trends and more
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2, maxWidth: 600, margin: '0 auto', mb: 3 }}>
              <TextField
                placeholder="Enter your email address"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: '#2a2a2a',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s ease',
                  input: { color: '#ffffff', fontSize: '0.9rem' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444444' },
                  '&:hover': { bgcolor: '#333333' },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#cccccc',
                  color: '#000000',
                  fontWeight: 800,
                  px: 4,
                  py: 1.5,
                  transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1), background-color 0.2s ease',
                  '&:hover': { bgcolor: '#ffffff', transform: 'translateY(-2px)' },
                  '&:active': { transform: 'translateY(0) scale(0.97)' },
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
            <Typography variant="caption" sx={{ color: '#777777', fontSize: '0.7rem' }}>
              I agree to receive marketing emails/SMS/texts and have read and accepted the Terms & Conditions and Privacy Policy.
            </Typography>
          </Reveal>
        </Container>
      </Box>

    </Box>
  );
};

export default LandingPage;