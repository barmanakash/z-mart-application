import { 
  Container, 
  Typography, 
  Box, 
  Breadcrumbs, 
  Link, 
  List, 
  ListItem, 
  ListItemText, 
  styled
} from '@mui/material';
import React from 'react';

function ReturnAndCancellationPolicy() {

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
                                Return and Cancellation Policy
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
                        Return and Cancellation Policy
                    </Typography>

                    {/* RETURNS POLICY Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            RETURNS POLICY:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            At Megamart, we offer a 15 days return policy for online purchases. All returned items must be in their original condition with tags attached and pass our quality control checklist. Returns for innerwear are not accepted.
                        </Typography>

                        {/* Policy Bullet Points */}
                        <List sx={{ disablePadding: true, pl: 2, mb: 3 }}>
                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Partial Returns</strong>: Individual items from an order can be returned, with each item receiving a unique return ID sent to your registered email.
                                        </Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Refund Process</strong>: Delivery charges are non-refundable. Refunds for cash-on-delivery orders are processed via NEFT. Pre-paid orders will be refunded to the source or to the Megamart wallet.
                                        </Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Special Offers</strong>: Returns for promotional items are subject to additional terms, which may supersede the standard return policy.
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>

                    {/* How to Return Items Subsection */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 1, color: '#1a1a1a' }}>
                            How to Return Items:
                        </Typography>
                        <List sx={{ disablePadding: true, pl: 2.5 }}>
                            <ListItem sx={{ display: 'list-item', listStyleType: 'decimal', py: 0.5, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            Sign in to your Megamart account, select "My Account," and initiate a return for each item.
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>

                    {/* CANCELLATIONS POLICY Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            CANCELLATIONS POLICY:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            Orders can be cancelled by emailing{' '}
                            <Link href="mailto:care@megamartfashions.com" underline="always" sx={{ color: '#3366cc' }}>
                                care@zmart.com
                            </Link>{' '}
                            before dispatch. If the order has been shipped, refuse delivery for it to be cancelled.
                        </Typography>
                    </Box>

                    {/* Refund Timeline Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            Refund Timeline:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            Refunds are processed within seven business days post return pick-up. In-store payment refunds are made via NEFT; online payment refunds are credited to the original payment source.
                        </Typography>
                    </Box>

                    {/* Refund Adjustments for Promotions Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            Refund Adjustments for Promotions:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 3 }}>
                            For returns on orders with promotional discounts, the refund may be adjusted if the promotion no longer applies to the remaining items in the order.
                        </Typography>

                        {/* Footnote Inquiry Link */}
                        <Typography variant="body1" sx={{ color: '#333' }}>
                            For inquiries or assistance, please contact{' '}
                            <Link href="mailto:care@megamartfashions.com" underline="always" sx={{ color: '#3366cc' }}>
                                care@zmart.com
                            </Link>.
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

export default ReturnAndCancellationPolicy;

const MainBox = styled(Box)({})