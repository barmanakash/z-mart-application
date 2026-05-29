import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  IconButton, 
  Select, 
  MenuItem, 
  FormControl, 
  Breadcrumbs, 
  Link,
  Button
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterListIcon from '@mui/icons-material/FilterList';

// Mock Data
const products = [
  {
    id: 1,
    brand: "USPA ACTIVE",
    title: "Solid Regular Fit Active Polo Shirt",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=500&q=80",
    price: 1499.40,
    mrp: 2499.00,
    discount: "40%",
    emi: "500.00",
    offers: "+2 Offers"
  },
  {
    id: 2,
    brand: "U.S. POLO ASSN. DENI...",
    title: "Twill Pure Cotton Shirt",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
    price: 1619.40,
    mrp: 2699.00,
    discount: "40%",
    emi: "540.00",
    offers: "+1 Offer"
  },
  {
    id: 3,
    brand: "U.S. POLO ASSN. DENI...",
    title: "Plaid Checked Twill Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    price: 1799.40,
    mrp: 2999.00,
    discount: "40%",
    emi: "600.00",
    offers: "+2 Offers"
  },
  {
    id: 4,
    brand: "U.S. POLO ASSN. DENI...",
    title: "Brandon Slim Tapered Fit Trous...",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    price: 2099.30,
    mrp: 2999.00,
    discount: "30%",
    emi: "700.00",
    offers: "+3 Offers"
  },
  {
    id: 5,
    brand: "U.S. POLO ASSN. DENI...",
    title: "Harold Slim Straight Fit Blue Jea...",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80",
    price: 1959.30,
    mrp: 2799.00,
    discount: "30%",
    emi: "654.00",
    offers: "+3 Offers"
  }
];

export default function WomenProduct() {
  const [sortBy, setSortBy] = React.useState('Popularity');

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', py: 2 }}>
      {/* Filter Header Bar */}
      <Box sx={{ borderBottom: '1px solid #e0e0e0', pb: 1, mb: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button 
              startIcon={<FilterListIcon />} 
              sx={{ color: '#000', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Filters
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, flexGrow: 1, justifyContent: { xs: 'flex-start', sm: 'center' } }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#282c3f' }}>Women</Typography>
              <Typography variant="body2" sx={{ color: '#878787' }}>(23326 Products)</Typography>
            </Box>

            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                displayEmpty
                sx={{ 
                  borderRadius: 0, 
                  fontSize: '14px',
                  '.MuiOutlinedInput-notchedOutline': { borderColor: '#d4d5d9' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#a3a3a3' },
                }}
              >
                <MenuItem value="Popularity">Sort: <strong>Popularity</strong></MenuItem>
                <MenuItem value="PriceLowHigh">Price: Low to High</MenuItem>
                <MenuItem value="PriceHighLow">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Container>
      </Box>

      {/* Breadcrumbs */}
      <Container maxWidth="xl" sx={{ mb: 3 }}>
        <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ fontSize: '12px' }}>
          <Link underline="hover" color="inherit" href="/">Home</Link>
          <Typography color="text.primary" sx={{ fontSize: '12px', fontWeight: 600 }}>Women</Typography>
        </Breadcrumbs>
      </Container>

      {/* Grid Container */}
      <Container maxWidth="xl">
        {/* We use grid container stretching properties here to align heights */}
        <Grid container spacing={2.5} alignItems="stretch">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id} sx={{ display: 'flex' }}>
              <Card sx={{ 
                width: '100%', 
                height: '100%', // <-- Fixes uniform height across cards
                display: 'flex', // <-- Allows child elements to grow uniformly
                flexDirection: 'column', 
                borderRadius: 0, 
                boxShadow: 'none', 
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}>
                
                {/* 1. Standardized 3:4 Image Wrapper Area */}
                <Box sx={{ 
                  width: '100%', 
                  position: 'relative', 
                  paddingTop: '133.33%', // Forces perfect uniform height to width ratio
                  bgcolor: '#f5f5f5',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                </Box>

                {/* Active Indicator Slider Under Image */}
                <Box sx={{ width: '25px', height: '3px', bgcolor: '#000', mt: 1, ml: 2 }} />

                {/* 2. Card Content Wrapper */}
                <CardContent sx={{ 
                  pt: 1, 
                  px: 2, 
                  pb: '12px !important',
                  flexGrow: 1, // <-- Forces text section to fill out card space evenly
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between' // Ensures bottom row fields match lines perfectly
                }}>
                  
                  {/* Brand & Wishlist icon */}
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f', textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {product.brand}
                      </Typography>
                      <IconButton size="small" sx={{ p: 0, color: '#9496a5' }}>
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    {/* Title */}
                    <Typography sx={{ fontSize: '13px', color: '#7e818c', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', mt: 0.5 }}>
                      {product.title}
                    </Typography>
                  </Box>

                  {/* Pricing and Offers Blocks */}
                  <Box sx={{ mt: 1 }}>
                    {/* Price Row */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>
                        ₹{product.price.toFixed(2)}
                      </Typography>
                      <Typography sx={{ textDecoration: 'line-through', fontSize: '12px', color: '#7e818c' }}>
                        ₹{product.mrp.toFixed(2)}
                      </Typography>
                      <Typography sx={{ color: '#ff527b', fontSize: '12px', fontWeight: 600 }}>
                        {product.discount} OFF
                      </Typography>
                    </Box>

                    {/* EMI Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                      <Typography sx={{ fontSize: '11px', color: '#282c3f' }}>
                        or <strong>₹{product.emi}/Month</strong>
                      </Typography>
                      <Box component="span" sx={{ bgcolor: '#000', color: '#fff', fontSize: '9px', fontWeight: 'bold', px: 0.5, py: 0.2, borderRadius: '2px', textTransform: 'uppercase' }}>
                        Buy on EMI
                      </Box>
                    </Box>

                    {/* Offer Counter Text */}
                    <Typography sx={{ fontSize: '11px', color: '#03a685', fontWeight: 600, mt: 0.5 }}>
                      {product.offers}
                    </Typography>
                  </Box>

                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}