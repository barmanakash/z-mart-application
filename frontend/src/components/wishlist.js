import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, IconButton, Chip, styled } from '@mui/material';
import React from 'react';
import { useWishlist } from './wishlistcontext';
// Swapped out the problematic DeleteOutlineIcon for the standard Delete icon
import { Delete as DeleteIcon } from '@mui/icons-material';

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  const FirstPage = () => {
    // If the wishlist is empty, show a clean fallback UI
    if (wishlist.length === 0) {
      return (
        <StyleBox sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#666' }}>
            Your Wishlist is Empty
          </Typography>
          <Typography variant="body2" sx={{ color: '#999', mt: 1 }}>
            Explore products and tap the heart icon to save your favorites here!
          </Typography>
        </StyleBox>
      );
    }

    return (
      <StyleBox sx={{ py: 4 }}>
        <Typography  sx={{ fontWeight: 800, mb: 4, textTransform: 'uppercase', letterSpacing: 1, fontSize:'15px' }}>
          My Wishlist ({wishlist.length})
        </Typography>

        <Grid container spacing={3}>
          {wishlist.map((prod, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', position: 'relative' }}>
                
                {/* Remove from Wishlist Button */}
                <IconButton 
                  onClick={() => toggleWishlist(prod)}
                  sx={{ 
                    position: 'absolute', 
                    top: 10, 
                    right: 10, 
                    zIndex: 2, 
                    bgcolor: 'rgba(255,255,255,0.8)',
                    '&:hover': { bgcolor: '#fee2e2', color: '#dc2626' }
                  }}
                >
                  {/* Updated tag name to use the new icon variable */}
                  <DeleteIcon fontSize="small" />
                </IconButton>

                <CardMedia component="img" height="280" image={prod.img} alt={prod.brand} />
                
                <CardContent sx={{ p: 2 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem' }}>{prod.brand}</Typography>
                  <Typography noWrap sx={{ color: '#666666', fontSize: '0.75rem', mb: 1 }}>{prod.desc}</Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.9rem' }}>₹{prod.price}</Typography>
                    <Typography sx={{ textDecoration: 'line-through', color: '#999999', fontSize: '0.75rem' }}>₹{prod.oldPrice}</Typography>
                    <Typography sx={{ color: '#dc2626', fontWeight: 700, fontSize: '0.75rem' }}>{prod.discount}</Typography>
                  </Box>
                  
                  <Chip label="Buy 1 Get 1" size="small" sx={{ mt: 1, bgcolor: '#000000', color: '#ffffff', borderRadius: '4px', fontSize: '0.65rem', height: 20 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyleBox>
    );
  };

  return (
    <Container maxWidth="xl">
      {FirstPage()}
    </Container>
  );
}

export default Wishlist;

const StyleBox = styled(Box)({});