import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [address, setAddress] = useState({ street: '', city: '', state: '', zipCode: '' });
  const [processing, setProcessing] = useState(false);

  const handleInput = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // Map Redux tracking items directly into raw operational objects for validation
      const formattedItems = cartItems.map(item => ({
        productId: item.product._id,
        quantity: item.quantity,
        size: item.size,
        color: item.color
      }));

      const token = localStorage.getItem('userToken'); // Assumes auth token configuration storage
      
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ items: formattedItems, shippingAddress: address })
      });

      const json = await response.json();
      if (json.success) {
        alert(`Order securely processed! Confirmation Reference ID: ${json.data._id}`);
        // Add direct system redirects or cart flush routines here
      } else {
        alert(`Transaction declined: ${json.message}`);
      }
    } catch (err) {
      alert('Failed to transmit order securely to servers.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Secure Checkout</Typography>
      <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleOrderSubmit}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Shipping Logistics Destination</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth size="small" name="street" label="Street Address" value={address.street} onChange={handleInput} />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth size="small" name="city" label="City" value={address.city} onChange={handleInput} />
              </Grid>
              <Grid item xs={3}>
                <TextField required fullWidth size="small" name="state" label="State" value={address.state} onChange={handleInput} />
              </Grid>
              <Grid item xs={3}>
                <TextField required fullWidth size="small" name="zipCode" label="Zip Code" value={address.zipCode} onChange={handleInput} />
              </Grid>
            </Grid>

            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              disabled={processing || cartItems.length === 0}
              sx={{ mt: 4, bgcolor: '#1a1a1a', py: 1.5, fontWeight: 'bold', '&:disabled': { bgcolor: '#ccc' } }}
            >
              {processing ? 'Authorizing Financial Parameters...' : 'Authorize and Place Order'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;