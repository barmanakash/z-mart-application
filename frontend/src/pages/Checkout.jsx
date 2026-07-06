import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, Button, TextField, Card, Grid, Alert, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../components/wishlistcontext';

// --- VALIDATION SCHEMA USING YUP ---
const validationSchema = Yup.object({
  street: Yup.string().required('Street address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string()
    .matches(/^\d{5,6}$/, 'Zip Code must be 5 or 6 digits')
    .required('Zip Code is required'),
  
  // Static card verification: Must match exactly 4242 4242 4242 4242
  cardNumber: Yup.string()
    .required('Card number is required')
    .test('is-static-card', 'Invalid Card! Use demo: 4242 4242 4242 4242', (value) => {
      const cleanValue = value ? value.replace(/\s+/g, '') : '';
      return cleanValue === '4242424242424242';
    }),

  // Expiry verification: Must match MM/YY format, be a valid future date, and match 12/29
  expiry: Yup.string()
    .required('Expiry date is required')
    .matches(/^(0[1-12]|1[0-2])\/?([0-9]{2})$/, 'Expiry must be in MM/YY format')
    .test('is-future-date', 'Expiry date cannot be a recent or past date', (value) => {
      if (!value) return false;
      const [month, year] = value.split('/').map(Number);
      const fullYear = 2000 + year;

      const today = new Date();
      const currentMonth = today.getMonth() + 1; 
      const currentYear = today.getFullYear();

      if (fullYear < currentYear) return false;
      if (fullYear === currentYear && month <= currentMonth) return false;
      return true;
    })
    .test('is-static-expiry', 'Wrong Expiry! Use demo: 12/29', (value) => value === '12/29'),

  // Static CVC verification: Must match exactly 123
  cvc: Yup.string()
    .required('CVC is required')
    .matches(/^\d{3}$/, 'CVC must be 3 digits')
    .test('is-static-cvc', 'Wrong CVC! Use demo: 123', (value) => value === '123'),
});

const Checkout = () => {
  // State tracking if the checkout process is complete
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();
  const { clearCartContext } = useWishlist();
  
  // Moved product data into a controlled state so it can be completely wiped out on success
  const [cartProduct, setCartProduct] = useState({
    name: 'KUCCHI DRESS',
    brand: 'Value Finds',
    size: 'Free Size',
    qty: 1,
    price: 1499,
    image: '👗'
  });

  // Keep final order totals calculated or saved before wiping the product state
  const [finalPaidAmount, setFinalPaidAmount] = useState(0);

  const subtotal = cartProduct ? cartProduct.price * cartProduct.qty : 0;
  const deliveryCharge = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  // --- FORMIK INITIALIZATION ---
  const formik = useFormik({
    initialValues: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // 1. Lock down the total paid value for the invoice view
      setFinalPaidAmount(total);
      // 2. Clear the shared shopping bag so items do not reappear after returning
      clearCartContext();
      // 3. Erase the item from state completely so it cannot render anywhere
      setCartProduct(null);
      // 4. Swap layout instantly without blocking alert dialog popups
      setIsPaid(true);
    },
  });

  // Helper function to auto-format credit card spacing (4242 4242...)
  const handleCardNumberChange = (e) => {
    const targetVal = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = targetVal.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      formik.setFieldValue('cardNumber', parts.join(' '));
    } else {
      formik.setFieldValue('cardNumber', targetVal);
    }
  };

  // Helper function to auto-format Expiry date with a slash (MM/YY)
  const handleExpiryChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, '');
    if (input.length > 2) {
      input = `${input.substring(0, 2)}/${input.substring(2, 4)}`;
    }
    formik.setFieldValue('expiry', input);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {isPaid ? (
        /* --- SUCCESS VIEW (PRODUCT AND FORM COMPLETELY REMOVED) --- */
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Paper 
            elevation={4} 
            sx={{ 
              p: 5, 
              textAlign: 'center', 
              maxWidth: 500, 
              borderRadius: 3,
              borderTop: '6px solid #4caf50'
            }}
          >
            <Box sx={{
              width: 70,
              height: 70,
              bgcolor: '#e8f5e9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              fontSize: '2rem'
            }}>
              ✅
            </Box>
            
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: '#1a1a1a' }}>
              Payment Successful!
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
              Thank you for shopping at Z-Mart. Your order has been placed successfully and is being prepared for shipment.
            </Typography>
            
            <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 2, mb: 4, border: '1px solid #eee' }}>
              <Typography variant="subtitle2" color="textSecondary">
                Total Amount Paid
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a1a1a', mt: 0.5 }}>
                ₹{finalPaidAmount}
              </Typography>
            </Box>

            <Button 
              variant="contained" 
              // Custom redirection context logic can be added here
              // onClick={() => alert("Redirecting back to homepage...")} 
              onClick={() => navigate('/')} 
              sx={{ 
                bgcolor: '#1a1a1a', 
                color: 'white', 
                px: 4, 
                py: 1.2,
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#333' } 
              }}
            >
              Back to Home
            </Button>
          </Paper>
        </Box>
      ) : (
        /* --- ORIGINAL CHECKOUT FORM VIEW --- */
        <form onSubmit={formik.handleSubmit}>
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
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.street && Boolean(formik.errors.street)}
                    helperText={formik.touched.street && formik.errors.street}
                    placeholder="Enter your street address"
                    sx={{ mb: 2 }}
                    variant="outlined"
                  />
                  
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                        placeholder="e.g., New York"
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="State"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state && formik.errors.state}
                        placeholder="e.g., NY"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Zip Code"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                    helperText={formik.touched.zipCode && formik.errors.zipCode}
                    placeholder="e.g., 10001"
                    variant="outlined"
                  />
                </Box>

                {/* CARD PAYMENT SECTION */}
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', mt: 3 }}>
                  💳 CARD PAYMENT
                </Typography>

                <Alert severity="info" sx={{ mb: 2 }}>
                  <strong>Demo Mode:</strong> Use static credentials to test validation:<br />
                  • Card: <code>4242 4242 4242 4242</code><br />
                  • Expiry: <code>12/29</code><br />
                  • CVC: <code>123</code>
                </Alert>

                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={formik.values.cardNumber}
                  onChange={handleCardNumberChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                  helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                  placeholder="4242 4242 4242 4242"
                  inputProps={{ maxLength: 19 }}
                  sx={{ mb: 2 }}
                />

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Expiry (MM/YY)"
                      name="expiry"
                      value={formik.values.expiry}
                      onChange={handleExpiryChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.expiry && Boolean(formik.errors.expiry)}
                      helperText={formik.touched.expiry && formik.errors.expiry}
                      placeholder="12/29"
                      inputProps={{ maxLength: 5 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVC"
                      name="cvc"
                      type="password"
                      value={formik.values.cvc}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                      helperText={formik.touched.cvc && formik.errors.cvc}
                      placeholder="123"
                      inputProps={{ maxLength: 3 }}
                    />
                  </Grid>
                </Grid>

                {/* PAY NOW BUTTON */}
                <Button 
                  fullWidth
                  type="submit"
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#1a1a1a', 
                    color: 'white',
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#333' }
                  }}
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
                {cartProduct && (
                  <Box sx={{ 
                    p: 2, 
                    border: '1px solid #eee', 
                    borderRadius: 1,
                    mb: 2,
                    bgcolor: '#fafafa'
                  }}>
                    <Typography sx={{ fontSize: '1.2rem', mb: 1 }}>
                      {cartProduct.image}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {cartProduct.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                      Brand: {cartProduct.brand}
                    </Typography>
                    <Typography variant="body2">
                      Size: <strong>{cartProduct.size}</strong> | Qty: <strong>{cartProduct.qty}</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold', color: '#d32f2f' }}>
                      Price: ₹{cartProduct.price}
                    </Typography>
                  </Box>
                )}

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
        </form>
      )}
    </Container>
  );
};

export default Checkout;