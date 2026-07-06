import React, { useState } from 'react';
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
    '&:hover': { borderWidth: '1.5px', bgcolor: 'rgba(0,0,0,0.04)', borderColor: '#000000' }
  };

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

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', bgcolor: '#ffffff', marginTop: '' }}>

      {/* 1. TOP OFFER BANNER STICK (image_560aa5.jpg Reference) */}
      <Box sx={{ bgcolor: '#095f11', color: '#ffffff', py: 1, textAlign: 'center', position: 'relative' }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px' }}>
          *** 15% OFF For New Users ***
        </Typography>
      </Box>

      {/* 2. SUB-HEADER NAVIGATION MARGIN LINKS (image_560aa5.jpg Reference) */}
       <Men/>
      <Corousel />
      {/* 4. "EXPLORE MORE" CIRCULAR CATEGORIES (image_5607e2.jpg Reference) */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Typography sx={sectionTitleStyle}>Explore More</Typography>
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
                }}
              />
              <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: item.color || '#000000', letterSpacing: '0.5px' }}>
                {item.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. BRAND DISCOUNTS INTEGRATION HEADER GRID (image_560aa5.jpg & image_560ac8.jpg Reference) */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'relative', height: 350, backgroundImage: `url(${Hardik})`, backgroundSize: 'cover', backgroundPosition: 'center', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
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
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ position: 'relative', height: 350, backgroundImage: `url(${MenImage})`, backgroundSize: 'cover', backgroundPosition: 'center', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "Red" }}>
              <Typography variant="h3" sx={{ fontWeight: 900, color: '#000000', letterSpacing: '1px' }}>UP TO 55% OFF</Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: '#000000', color: '#ffffff', borderRadius: '50px', px: 4, py: 1, fontWeight: 700 }}
                  onClick={() => handleShopNow({ title: 'UPTO55 - Men', desc: 'UP TO 55% OFF', price: 1999, img: MenImage })}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Triple Cluster Secondary Row (image_560ac8.jpg Reference) */}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ height: 300, backgroundImage: `url(${Mantoo})`, backgroundSize: 'cover', backgroundPosition: 'center', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff' }}>FLAT 40% OFF</Typography>
              <Box sx={{ mb: 1 }}>
                <Button size="small" variant="contained" sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: '0.7rem' }} onClick={() => handleShopNow({ title: 'FLAT40 - BRIEFS', desc: 'FLAT 40% OFF', price: 1099, img: Mantoo })}>
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ height: 300, backgroundImage: `url(${Manthree})`, backgroundSize: 'cover', backgroundPosition: 'center', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff' }}>UP TO 50% OFF</Typography>
              <Box sx={{ mb: 1 }}>
                <Button size="small" variant="contained" sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: '0.7rem' }} onClick={() => handleShopNow({ title: 'UPTO50 - JEANS', desc: 'UP TO 50% OFF', price: 1299, img: Manthree })}>
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ height: 300, backgroundImage: `url(${ManFor})`, backgroundSize: 'cover', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff' }}>LATEST TRENDS</Typography>
              <Box sx={{ mb: 1 }}>
                <Button size="small" variant="contained" sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: '0.7rem' }} onClick={() => handleShopNow({ title: 'LATEST TRENDS', desc: 'LATEST TRENDS', price: 1599, img: ManFor })}>
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 6. "VALUE FINDS" HORIZONTAL HORIZONTAL SCROLL TICKER (image_560ae9.jpg Reference) */}
      <Box sx={{ bgcolor: '#000000', py: 6, mb: 8, color: '#ffffff' }}>
        <Container maxWidth="xl">
          <Typography sx={[sectionTitleStyle, { color: '#ffffff', mb: 3 }]}>Value Finds</Typography>

          <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', gap: 2, transform: `translateX(${valFindsOffset}px)`, transition: 'transform 0.4s ease' }}>
              {[
                { title: 'TRADITIONAL DRESS', desc: 'MIN. 40% OFF', img: DressImage },
                { title: 'GARBA DRESS', desc: 'MIN. 40% OFF', img: DressImageA },
                { title: 'KUCCHI DRESS', desc: 'MIN. 40% OFF', img: DressImageB },
                { title: 'IVORY LEHENGA ', desc: 'MIN. 40% OFF', img: DressImageC },
                { title: 'STRIPED GOWN', desc: 'MIN. 30% OFF', img: DressImageD },
                { title: 'BLACK BANARASHI SILK', desc: 'MIN. 30% OFF', img: DressImageE },
                { title: 'MIDNIGHT BLOOM GOWN', desc: 'MIN. 40% OFF', img: DressImageG },
              ].map((card, index) => (
                <Box key={index} sx={{ minWidth: 180, bgcolor: '#ffffff', borderRadius: '8px', overflow: 'hidden', textAlign: 'center', pb: 2 }}>
                  <Box sx={{ height: 220, backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Typography sx={{ color: '#000000', fontWeight: 800, fontSize: '0.75rem', mt: 1.5 }}>{card.desc}</Typography>
                  <Typography sx={{ color: '#666666', fontSize: '0.7rem', mb: 1.5 }}>{card.title}</Typography>
                  <Button size="small" variant="contained" sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: '0.65rem', borderRadius: '0px' }} onClick={() => addToCartFromLanding(card)} >SHOP NOW</Button>
                </Box>
              ))}
            </Box>

            {/* Slider Navigation Arrows */}
            <IconButton
              onClick={() => setValFindsOffset(prev => Math.min(prev + 200, 0))}
              sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: '#ffffff' } }}
            >
              <ArrowBackIosNewIcon sx={{ color: '#000000', fontSize: '1rem' }} />
            </IconButton>
            <IconButton
              onClick={() => setValFindsOffset(prev => prev - 200)}
              sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: '#ffffff' } }}
            >
              <ArrowForwardIosIcon sx={{ color: '#000000', fontSize: '1rem' }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* 7. KIDS FASHION SUB-HERO SPLIT BLOCK (image_560b07.jpg Reference) */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box
          sx={{
            width: '100%',
            height: 320,
            backgroundImage: `url(${ManFive})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pl: { xs: 4, md: 10 }
          }}
        >
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
      </Container>

      {/* 8. "HOT PICKS" 3D SKEWED PERSPECTIVE PROMO CARDS (image_560b23.jpg Reference) */}
      <Box sx={{ bgcolor: '#000000', py: 8, mb: 8 }}>
        <Container maxWidth="xl">
          <Typography sx={[sectionTitleStyle, { color: '#ffffff' }]}>Hot Picks</Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { category: 'BRIEFS', img: 'image_560b23.jpg' },
              { category: 'TRUNKS', img: 'image_560b23.jpg' },
              { category: 'BELTS', img: 'image_560b23.jpg', clear: true },
              { category: 'CAPS', img: 'image_560b23.jpg' },
              { category: 'HANDBAGS', img: 'image_560b23.jpg' }
            ].map((item, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 280,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px',
                    // Creates the card perspective shift shown in screenshots 
                    transform: item.clear ? 'none' : 'perspective(800px) rotateY(10deg)',
                    boxShadow: '0px 10px 25px rgba(0,0,0,0.4)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 2,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '0.9rem', mb: 1, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                    {item.category}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#ffffff', fontSize: '0.65rem', fontWeight: 700, borderRadius: '20px' }}
                    onClick={() => handleShopNow({ title: item.category, desc: item.category, price: 1299, img: item.img })}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 8 }}>
      <Typography sx={sectionTitleStyle}>Featured Products</Typography>
      <Grid container spacing={3}>
        {products.map((prod, idx) => {
          const favorited = isWishlisted(prod);

          return (
            <Grid item xs={12} sm={6} md={2.4} key={idx}>
              <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', position: 'relative', '&:hover .quick-add': { opacity: 1 } }}>
                
                {/* Wishlist Button */}
                <IconButton 
                  onClick={() => toggleWishlist(prod)}
                  sx={{ 
                    position: 'absolute', 
                    top: 10, 
                    right: 10, 
                    zIndex: 2, 
                    bgcolor: 'rgba(255,255,255,0.7)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                  }}
                >
                  {favorited ? (
                    <FavoriteIcon fontSize="small" sx={{ color: '#dc2626' }} /> // Red filled heart
                  ) : (
                    <FavoriteBorderIcon fontSize="small" /> // Empty heart
                  )}
                </IconButton>

                <CardMedia component="img" height="280" image={prod.img} alt="product" />
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
                    sx={{ mt: 1, bgcolor: '#000000', color: '#ffffff', borderRadius: '4px', fontSize: '0.65rem', height: 20, cursor: 'pointer' }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        {/* Centered the header text as well to match the layout */}
        <Typography sx={{ ...sectionTitleStyle, textAlign: 'center', mb: 4 }}>
          Our Customers Love Us
        </Typography>

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
            <Box
              key={idx}
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                p: 2.5,
                width: { xs: '280px', sm: '320px' },
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff'
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
          ))}
        </Box>
      </Container>

      {/* 11. PARTNER BRANDS CATALOG DIRECTORY GRID (image_560b66.jpg & image_560b85.jpg Reference) */}
      <Box sx={{ borderTop: '1px solid #e0e0e0', py: 6, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ textAlign: 'center', opacity: 0.8 }}>
            {['U.S. POLO ASSN.', 'ARROW', 'TOMMY HILFIGER', 'Calvin Klein', 'FLYING MACHINE'].map((brandName, idx) => (
              <Grid item xs={6} sm={4} md={2.4} key={idx}>
                <Typography variant="h5" sx={{ fontFamily: '"Georgia", serif', fontWeight: 700, color: '#222222', letterSpacing: '1px' }}>
                  {brandName}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 12. "CONNECT WITH US" NEWSLETTER SUBSCRIPTION FOOTER STRIP (image_560b85.jpg Reference) */}
      <Box sx={{ bgcolor: '#1a1a1a', color: '#ffffff', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
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
                input: { color: '#ffffff', fontSize: '0.9rem' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444444' }
              }}
            />
            <Button variant="contained" sx={{ bgcolor: '#cccccc', color: '#000000', fontWeight: 800, px: 4, py: 1.5, '&:hover': { bgcolor: '#ffffff' } }}>
              SUBSCRIBE
            </Button>
          </Box>
          <Typography variant="caption" sx={{ color: '#777777', fontSize: '0.7rem' }}>
            I agree to receive marketing emails/SMS/texts and have read and accepted the Terms & Conditions and Privacy Policy.
          </Typography>
        </Container>
      </Box>

    </Box>
  );
};

export default LandingPage;