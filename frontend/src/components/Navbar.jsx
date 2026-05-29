import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton, Box, InputBase, Popover, Button, Divider} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import { useWishlist } from './wishlistcontext';
import Logo from '../assets/zmart.png'

const Navbar = () => {

  const navigate = useNavigate();
  const { wishlist, totalQuantity } = useWishlist();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const menuLinkStyle = {
    color: '#555555',
    fontSize: '0.95rem',
    py: 0.8,
    cursor: 'pointer',
    fontFamily: '"Inter", "Roboto", sans-serif',
    '&:hover': { color: '#000000' }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0', px: { xs: 2, md: 6 } }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box 
            component="img"
            src={Logo} 
            alt="logoimage" 
            onClick={() => navigate('/')} 
            sx={{ 
              height: '800px', 
              width: '150px',
              maxHeight: '100px',
              cursor: 'pointer', 
              objectFit: 'contain'
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #b3b3b3', borderRadius: '50px', px: 2, py: 0.5, width: { xs: '150px', sm: '250px', md: '320px' } }}>
            <InputBase placeholder="Search:" sx={{ ml: 1, flex: 1, fontSize: '0.95rem' }} />
            <SearchIcon sx={{ color: '#4d4d4d' }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}}>
            <IconButton color="inherit" sx={{ color: '#4d4d4d' }} component={Link} to='/mapdirection'><LocationOnOutlinedIcon /></IconButton>
            <Box>
              <IconButton 
                color="inherit" 
                onClick={handleProfileClick}
                sx={{ 
                  color: '#4d4d4d', 
                  borderBottom: open ? '3px solid #1a1a1a' : 'transparent',
                  borderRadius: open ? '0px' : '50%',
                }}
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                slotProps={{
                  paper: {
                    sx: { p: 3, width: 260, boxShadow: '0px 4px 20px rgba(0,0,0,0.08)', borderRadius: '0px', mt: '10px' }
                  }
                }}
                disableRestoreFocus
              >
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1.5, color: '#1a1a1a' }}>
                  Welcome!
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={() => { 
                    handlePopoverClose(); 
                    navigate('/login'); 
                  }}
                  sx={{ bgcolor: '#1a1a1a', color: '#ffffff', borderRadius: '50px', fontWeight: 700, py: 1, mb: 2, '&:hover': { bgcolor: '#000000' } }}
                >
                  LOGIN / SIGN UP
                </Button>
                <Divider sx={{ mb: 2 }} />
                <Typography sx={menuLinkStyle}>My Account</Typography>
                <Typography sx={menuLinkStyle}>Orders</Typography>
                <Typography sx={menuLinkStyle}>Saved Addresses</Typography>
                <Typography sx={menuLinkStyle}>Coupons</Typography>
              </Popover>
            </Box>
            <IconButton color="inherit" sx={{ color: '#4d4d4d', backgroundColor:"red" }} onClick={() => navigate('/wishlist')}><FavoriteBorderOutlinedIcon /></IconButton>
            <IconButton onClick={() => navigate('/cart')} color="inherit" sx={{ color: '#4d4d4d' }}>
              <Badge badgeContent={totalQuantity} color="error" overlap="circular"><ShoppingBagOutlinedIcon /></Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;