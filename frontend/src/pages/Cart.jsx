import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, IconButton, Divider } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../components/wishlistcontext'; // Use your Context file instead of Redux store

const Cart = () => {
  const navigate = useNavigate();
  
  // Pull states and actions out of your simple Context layer
  const { cartItems, removeFromCartContext } = useWishlist();

  // Flat price mapping calculation setup
  const clientSubtotal = cartItems.reduce((acc, item) => acc + (item.currentPrice * item.quantity), 0);
  const shippingFee = clientSubtotal >= 999 || clientSubtotal === 0 ? 0 : 99;
  const clientTotal = clientSubtotal + shippingFee;

  return (
    <Box sx={{ p: 4, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Your Shopping Bag</Typography>

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>Your bag is currently empty.</Typography>
          <Button variant="contained" onClick={() => navigate('/')} sx={{ bgcolor: '#1a1a1a' }}>Shop Collection</Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item, index) => (
              <Card key={index} sx={{ display: 'flex', mb: 2, boxShadow: 'none', border: '1px solid #f0f0f0' }}>
                {/* Dynamically reads background fallback image or direct element url string */}
                <Box component="img" src={item.img} sx={{ width: 120, objectFit: 'cover' }} />
                
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>Value Finds</Typography>
                    <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                    <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                      Size: <strong>{item.size}</strong> | Qty: <strong>{item.quantity}</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      ₹{item.currentPrice * item.quantity}
                    </Typography>
                    <IconButton color="error" size="small" onClick={() => removeFromCartContext(index)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* Checkout Operational Summary Sidebars */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 'none', border: '1px solid #f0f0f0', bgcolor: '#fafafa', p: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Order Summary</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body2">₹{clientSubtotal}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body2">Delivery Charges</Typography>
                  <Typography variant="body2">{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Total Payable</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>₹{clientTotal}</Typography>
                </Box>
                
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={() => navigate('/checkout')}
                  sx={{ bgcolor: '#1a1a1a', py: 1.5, fontWeight: 'bold', '&:hover': { bgcolor: '#333' } }}
                >
                  Proceed To Secure Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Cart; 