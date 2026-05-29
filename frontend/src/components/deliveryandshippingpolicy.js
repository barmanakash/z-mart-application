import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Breadcrumbs, 
  Link, 
  styled
} from '@mui/material';

function DeliveryAndShippingPolicy() {

    const FirstPage = () => {
        return (
            <MainBox>
                <Container maxWidth="lg" sx={{ py: 4, fontFamily: 'sans-serif' }}>

                    {/* Breadcrumbs Navigation */}
                    <Box sx={{ mb: 2 }}>
                        <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ fontSize: '0.85rem' }}>
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Typography color="text.primary" sx={{ fontSize: '0.85rem' }}>
                                Delivery and Shipping Policy
                            </Typography>
                        </Breadcrumbs>
                    </Box>

                    {/* Main Page Title */}
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 4,
                            color: '#1a1a1a'
                        }}
                    >
                        Delivery and Shipping Policy
                    </Typography>

                    {/* Main Legal Content Paragraphs */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2.5 }}>
                            The domain name{' '}
                            <Link href="https://www.localhost:3000.com" underline="always" sx={{ color: '#3366cc' }}>
                                www.www.localhost:3000.com
                            </Link>{' '}
                            (hereinafter referred to as "Website") is owned by <strong>Arvind Lifestyle Brands Limited</strong>, a company incorporated under the Companies Act, 1956, with its registered office at Naroda Road, Railwaypura Post, Ahmedabad, and corporate office at 8th Floor, Du Parc Trinity Building, 17 M.G. Road, Bangalore 560 001 (hereinafter referred to as "Arvind").
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2.5 }}>
                            By accessing and using the Website, you agree to be bound by the following terms and conditions ("Terms of Use"), including applicable policies incorporated by reference. By transacting on the Website, you accept the policies governing such transactions and enter a binding agreement with Arvind.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 4 }}>
                            For clarity, references to "You" or "User" denote any natural or legal person who has registered on the Website to purchase products. Arvind does not permit purchases without registration. "We," "Us," and "Our" refer to Arvind.
                        </Typography>
                    </Box>

                    {/* Commercial Terms Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
                            Commercial Terms:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            All commercial terms are solely between the Buyers and Sellers. These terms include, but are not limited to, price, shipping costs, payment methods, payment terms, delivery dates and modes, warranties on products (if any), and any after-sales services related to the products.
                        </Typography>
                    </Box>

                    {/* Shipping Charges Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
                            Shipping Charges:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            Orders with a cart value of up to ₹999 are subject to a shipping fee of ₹99.
                        </Typography>
                    </Box>

                    {/* Verification Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
                            Verification:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            Before processing your order, Megamart may request supporting documents (e.g., government-issued ID and address proof) to confirm the ownership of the payment method used. This is to ensure a secure online shopping environment for our users.
                        </Typography>
                    </Box>

                </Container>

            </MainBox>
        )
    }


    return (
        <>{FirstPage()}</>
    )
}

export default DeliveryAndShippingPolicy;

const MainBox = styled(Box)({})