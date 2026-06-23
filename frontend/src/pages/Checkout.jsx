import React, { useState, useMemo } from 'react';
import { Box, Typography, Button, TextField, Card, CardContent, Grid, Alert, Container } from '@mui/material';

// Demo Checkout Page - Shows the payment form UI
const Checkout = () => {
  const [address, setAddress] = useState({ street: '', city: '', state: '', zipCode: '' });
  const [cardNumber, setCardNumber] = useState('');

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // Sample product data
  const sampleProduct = {
    name: 'KUCCHI DRESS',
    brand: 'Value Finds',
    size: 'Free Size',
    qty: 1,
    price: 1499,
    image: '👗'
  };

  const subtotal = sampleProduct.price * sampleProduct.qty;
  const deliveryCharge = subtotal >= 999 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* LEFT SIDE - PAYMENT FORM */}
        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            {/* SHIPPING ADDRESS SECTION */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              📍 SHIPPING ADDRESS
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Street Address"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                placeholder="Enter your street address"
                sx={{ mb: 2 }}
                variant="outlined"
                required
              />
              
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    placeholder="e.g., New York"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    placeholder="e.g., NY"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Zip Code"
                name="zipCode"
                value={address.zipCode}
                onChange={handleAddressChange}
                placeholder="e.g., 10001"
                variant="outlined"
                required
              />
            </Box>

            {/* CARD PAYMENT SECTION */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', mt: 3 }}>
              💳 CARD PAYMENT
            </Typography>

            <Alert severity="info" sx={{ mb: 2 }}>
              <strong>Demo Mode:</strong> This is a DEMO checkout form. In production, Stripe.js will handle secure card input.
            </Alert>

            <Box sx={{ 
              p: 2, 
              border: '2px dashed #ccc', 
              borderRadius: 1, 
              mb: 3,
              bgcolor: '#f5f5f5'
            }}>
              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                In the live version, this would be replaced with:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                ✓ Stripe CardElement (Secure Card Entry)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                ✓ Card Number Input (Auto-formatting)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                ✓ Expiry Date Input
              </Typography>
              <Typography variant="body2">
                ✓ CVC Input (Encrypted by Stripe)
              </Typography>
            </Box>

            <TextField
              fullWidth
              label="Card Number (Demo)"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4242 4242 4242 4242"
              sx={{ mb: 2 }}
              disabled
            />

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry (MM/YY)"
                  placeholder="12/25"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVC"
                  placeholder="123"
                  type="password"
                  disabled
                />
              </Grid>
            </Grid>

            {/* ERROR MESSAGE DEMO */}
            <Alert severity="error" sx={{ mb: 2 }}>
              ⚠️ This is a DEMO. Configure REACT_APP_STRIPE_PUBLIC_KEY in .env to enable real payments.
            </Alert>

            {/* PAY NOW BUTTON */}
            <Button 
              fullWidth
              variant="contained" 
              sx={{ 
                bgcolor: '#1a1a1a', 
                color: 'white',
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#333' }
              }}
              disabled
            >
              ★ PAY NOW ★
            </Button>
          </Card>
        </Grid>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 3, boxShadow: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              📋 ORDER SUMMARY
            </Typography>

            {/* PRODUCT ITEM */}
            <Box sx={{ 
              p: 2, 
              border: '1px solid #eee', 
              borderRadius: 1,
              mb: 2,
              bgcolor: '#fafafa'
            }}>
              <Typography sx={{ fontSize: '1.2rem', mb: 1 }}>
                {sampleProduct.image}
              </Typography>
              <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>
                {sampleProduct.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                Brand: {sampleProduct.brand}
              </Typography>
              <Typography variant="body2">
                Size: <strong>{sampleProduct.size}</strong> | Qty: <strong>{sampleProduct.qty}</strong>
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold', color: '#d32f2f' }}>
                Price: ₹{sampleProduct.price}
              </Typography>
            </Box>

            {/* PRICE BREAKDOWN */}
            <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 1, mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography fontWeight="bold">₹{subtotal}</Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Delivery Charges:</Typography>
                <Typography fontWeight="bold" sx={{ color: deliveryCharge === 0 ? '#4caf50' : '#d32f2f' }}>
                  {deliveryCharge === 0 ? '✓ FREE' : `₹${deliveryCharge}`}
                </Typography>
              </Box>

              <Box sx={{ 
                borderTop: '2px solid #ddd',
                pt: 2,
                display: 'flex', 
                justifyContent: 'space-between',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}>
                <Typography>Total Payable:</Typography>
                <Typography sx={{ color: '#1a1a1a' }}>₹{total}</Typography>
              </Box>
            </Box>

            <Button 
              fullWidth
              variant="outlined"
              sx={{ color: '#666', borderColor: '#ddd' }}
            >
              Continue Shopping
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;