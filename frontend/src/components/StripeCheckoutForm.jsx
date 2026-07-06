import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid, Alert, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { clearCart } from '../store/slices/cartSlice';

const StripeCheckoutForm = ({ totalAmount, breakdown }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const [address, setAddress] = useState({ street: '', city: '', state: '', zipCode: '' });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState(null);

  // Step 1: Create Payment Intent on component mount
  const createPaymentIntent = useCallback(async () => {
    try {
      const token = localStorage.getItem('userToken');
      
      const formattedItems = cartItems.map(item => ({
        productId: item.product._id,
        quantity: item.quantity,
        size: item.size,
        color: item.color
      }));

      const response = await fetch('/api/payment/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: formattedItems,
          shippingAddress: address
        })
      });

      const data = await response.json();
      if (data.success) {
        setPaymentIntentId(data.paymentIntentId);
      } else {
        setError('Failed to create payment intent');
      }
    } catch (err) {
      setError('Error creating payment intent');
      console.error(err);
    }
  }, [cartItems, address]);

  // Call createPaymentIntent on component mount
  useEffect(() => {
    createPaymentIntent();
  }, [createPaymentIntent]);

  const handleInput = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // Step 2: Handle Payment Submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe not loaded');
      return;
    }

    if (!address.street || !address.city || !address.state || !address.zipCode) {
      setError('Please fill in all address fields');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const token = localStorage.getItem('userToken');
      const cardElement = elements.getElement(CardElement);

      // Confirm payment with Stripe
      const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(paymentIntentId, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: localStorage.getItem('userEmail') || 'user@example.com'
          }
        }
      });

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Step 3: Confirm payment on backend and create order
        const formattedItems = cartItems.map(item => ({
          productId: item.product._id,
          quantity: item.quantity,
          size: item.size,
          color: item.color
        }));

        const confirmResponse = await fetch('/api/payment/confirm-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            items: formattedItems,
            shippingAddress: address,
            paymentIntentId: paymentIntent.id
          })
        });

        const confirmData = await confirmResponse.json();

        if (confirmData.success) {
          setSuccess(true);
          dispatch(clearCart());
          
          setTimeout(() => {
            alert(`✅ Payment successful! Order ID: ${confirmData.orderId}`);
            navigate('/');
          }, 2000);
        } else {
          setError(confirmData.message);
        }
      }
    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424242',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a'
      }
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Secure Payment Checkout</Typography>
      
      <Grid container spacing={4}>
        {/* Payment Form */}
        <Grid item xs={12} md={7}>
          <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 4 }}>
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              {success && <Alert severity="success" sx={{ mb: 2 }}>Payment Successful! Redirecting...</Alert>}

              <form onSubmit={handlePaymentSubmit}>
                {/* Shipping Address Section */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>Shipping Address</Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      name="street"
                      label="Street Address"
                      value={address.street}
                      onChange={handleInput}
                      disabled={processing}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      name="city"
                      label="City"
                      value={address.city}
                      onChange={handleInput}
                      disabled={processing}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      name="state"
                      label="State"
                      value={address.state}
                      onChange={handleInput}
                      disabled={processing}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      name="zipCode"
                      label="Zip Code"
                      value={address.zipCode}
                      onChange={handleInput}
                      disabled={processing}
                    />
                  </Grid>
                </Grid>

                {/* Card Details Section */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Card Details</Typography>
                <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '4px', mb: 3, bg: '#fafafa' }}>
                  <CardElement options={cardElementOptions} />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={processing || !stripe || !elements || cartItems.length === 0}
                  sx={{
                    bgcolor: '#1a1a1a',
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    '&:disabled': { bgcolor: '#ccc' }
                  }}
                >
                  {processing ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                      Processing Payment...
                    </>
                  ) : (
                    `Pay ₹${totalAmount.toFixed(2)}`
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Summary Sidebar */}
        <Grid item xs={12} md={5}>
          <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', bgcolor: '#fafafa', position: 'sticky', top: 20 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>Order Summary</Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">₹{breakdown?.subtotal?.toFixed(2) || '0.00'}</Typography>
              </Box>

              {breakdown?.savings > 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, color: '#2ecc71' }}>
                  <Typography variant="body2">Savings</Typography>
                  <Typography variant="body2">-₹{breakdown.savings.toFixed(2)}</Typography>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="body2">Delivery Charges</Typography>
                <Typography variant="body2">
                  {breakdown?.shippingCharges === 0 ? 'FREE' : `₹${breakdown?.shippingCharges?.toFixed(2) || '0.00'}`}
                </Typography>
              </Box>

              <Box sx={{ borderTop: '2px solid #e0e0e0', pt: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Total Payable</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>₹{totalAmount.toFixed(2)}</Typography>
                </Box>
              </Box>

              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                Your payment is secured and encrypted by Stripe
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StripeCheckoutForm;
