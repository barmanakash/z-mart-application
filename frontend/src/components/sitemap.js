import React, { useState } from 'react';
import {
    Grid,
    Box,
    List,
    ListItem,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Link,
    styled
} from '@mui/material';

// Static Data for the Right Accordion Menus
const SIDEBAR_LINKS = [
    { label: 'About Us', path: '/aboutuspage' },
    { label: 'Privacy Policy', path: '/privacypolicy' },
    { label: 'Terms and Conditions', path: '/termsandconditions' },
    { label: 'Returns and Cancellation policy', path: '/returnandcancalltionpolicy' },
    { label: "Help and FAQ's", path: '/helpandfaq' },
    { label: 'Delivery and Shipping Policy', path: '/deliveryandshippingpolicy' },
    { label: 'Sitemap', path: '/sitemap' },
    { label: 'Login', path: '/login' },
    { label: 'Wishlist', path: '/' },
    { label: 'Cart', path: '/' }
];

const ACORDION_CATEGORIES = [
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'kids', label: 'Kids' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'innerwear', label: 'Innerwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'winterwear', label: 'Winterwear' },
    { id: 'brands', label: 'Brands' },
];

function SiteMap() {
    const [expanded, setExpanded] = useState({ men: false, women: false, kids: false , footwear: false , innerwear : false, accessories : false, winterwear: false, brands: false });

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded((prev) => ({ ...prev, [panel]: isExpanded }));
    };

    // Helper to render layout content inside Accordions dynamically
    const renderAccordionContent = (categoryId, label) => {
        // You can customize lists based on category types
        const isMenOrWomen = categoryId === 'men' || categoryId === 'women' || categoryId === 'kids' || categoryId === 'footwear' || categoryId === 'innerwear' ||  categoryId === 'accessories' || categoryId === 'winterwear' || categoryId === 'brands';
        
        if (isMenOrWomen) {
            return (
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: '#1a1a1a' }}>
                        {label}
                    </Typography>

                    <Grid container spacing={2}>
                        {/* Topwear Links */}
                        <Grid item xs={6}>
                            <Typography variant="body1" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
                                Topwear
                            </Typography>
                            <List disablePadding>
                                {['T-Shirts', 'Polo Shirts', 'Casual Shirts', 'Formal Shirts', 'Sweatshirts & Hoodies', 'Jackets'].map((item) => (
                                    <ListItem key={item} disablePadding sx={{ py: 0.4 }}>
                                        <Link href="#" underline="always" sx={{ color: '#333333', fontSize: '0.9rem', '&:hover': { color: '#cc0000' } }}>
                                            {item}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        {/* Bottomwear Links */}
                        <Grid item xs={6}>
                            <Typography variant="body1" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
                                Bottomwear
                            </Typography>
                            <List disablePadding>
                                {['Jeans', 'Chinos', 'Casual Trousers', 'Formal Trousers', 'Shorts', 'Track Pants'].map((item) => (
                                    <ListItem key={item} disablePadding sx={{ py: 0.4 }}>
                                        <Link href="#" underline="always" sx={{ color: '#333333', fontSize: '0.9rem', '&:hover': { color: '#cc0000' } }}>
                                            {item}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            );
        }

        // Fallback for kids, footwear, brands, etc.
        return (
            <Typography variant="body2" sx={{ color: '#666' }}>
                Content for {label} category goes here.
            </Typography>
        );
    };

    return (
        <MainBox>
            <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3, fontFamily: 'sans-serif' }}>
                <Grid container spacing={4}>

                    {/* ================= LEFT SIDEBAR ================= */}
                    <Grid item xs={12} md={3.5}>
                        <Box sx={{ border: '1px solid #cccccc', p: 2, backgroundColor: '#ffffff' }}>
                            <List disablePadding>
                                {SIDEBAR_LINKS.map((linkItem, idx) => (
                                    <ListItem key={idx} disablePadding sx={{ py: 1.2, px: 1 }}>
                                        <Link
                                            href={linkItem.path}
                                            underline="none"
                                            sx={{
                                                color: '#1a1a1a',
                                                fontWeight: 700,
                                                fontSize: '0.95rem',
                                                '&:hover': { color: '#cc0000' }
                                            }}
                                        >
                                            {linkItem.label}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    {/* ================= RIGHT MAIN CONTENT (ACCORDIONS) ================= */}
                    <Grid item xs={12} md={8.5}>
                        {ACORDION_CATEGORIES.map((category) => {
                            const isPanelOpen = !!expanded[category.id];

                            return (
                                <Accordion
                                    key={category.id}
                                    expanded={isPanelOpen}
                                    onChange={handleAccordionChange(category.id)}
                                    disableGutters
                                    elevation={0}
                                    sx={{
                                        border: '1px solid #cccccc',
                                        mb: 1.5,
                                        '&:before': { display: 'none' },
                                        backgroundColor: '#f7f7f7'
                                    }}
                                >
                                    {/* Accordion Header */}
                                    <AccordionSummary
                                        expandIcon={
                                            <Typography
                                                sx={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: 400,
                                                    color: isPanelOpen ? '#cc0000' : '#1a1a1a',
                                                    lineHeight: 1,
                                                    px: 1
                                                }}
                                            >
                                                {isPanelOpen ? '—' : '+'}
                                            </Typography>
                                        }
                                        sx={{
                                            minHeight: 48,
                                            '& .MuiAccordionSummary-expandIconWrapper': {
                                                transform: 'none !important',
                                            },
                                            '& .MuiAccordionSummary-content': { my: 1.5, pl: 1 }
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '1rem',
                                                color: isPanelOpen ? '#cc0000' : '#1a1a1a'
                                            }}
                                        >
                                            {category.label}
                                        </Typography>
                                    </AccordionSummary>

                                    {/* Accordion Content Body */}
                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            p: 3,
                                            borderTop: '1px solid #cccccc'
                                        }}
                                    >
                                        {renderAccordionContent(category.id, category.label)}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>

                </Grid>
            </Box>
        </MainBox>
    );
}

export default SiteMap;

const MainBox = styled(Box)({});