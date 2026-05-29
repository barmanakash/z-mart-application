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
import React from 'react'

function About() {

    const FirstPage = () => {
        return (
            <StyleBox>
                <Container maxWidth="lg" sx={{ py: 4, fontFamily: 'sans-serif' }}>

                    {/* Breadcrumbs Navigation */}
                    <Box sx={{ mb: 2 }}>
                        <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ fontSize: '0.85rem' }}>
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Typography color="text.primary" sx={{ fontSize: '0.85rem' }}>
                                About us
                            </Typography>
                        </Breadcrumbs>
                    </Box>

                    {/* Main Title */}
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 4,
                            color: '#1a1a1a'
                        }}
                    >
                        About us
                    </Typography>

                    {/* Intro Paragraphs */}
                    <Box sx={{ color: '#333', lineHeight: 1.7, mb: 4 }}>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            <strong>Megamart</strong> is your ultimate fashion destination where style meets affordability.
                            A part of Arvind Lifestyle Limited, Megamart offers an exceptional retail experience by
                            bringing together iconic brands such as Arrow, Calvin Klein, Flying Machine, Tommy Hilfiger,
                            U.S. Polo Assn., and AD by Arvind. Each brand tells its own story, weaving a rich tapestry
                            of styles that cater to your individuality and persona.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            We aim to be the go-to place where fashion and affordability intersect, providing
                            high-quality products that reflect your unique style without stretching your budget.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4 }}>
                            At Megamart, accessible luxury is not just a promise—it’s our commitment to you.
                        </Typography>
                    </Box>

                    {/* Mission Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Our Mission <Box component="span" sx={{ fontWeight: 'normal' }}>is built on four key pillars:</Box>
                        </Typography>

                        {/* Pillars List */}
                        <List sx={{ disablePadding: true, pl: 2 }}>

                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.75, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Brand Authenticity</strong>: We maintain a curated selection of trusted brands that resonate with our customers.
                                        </Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.75, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Customer-Centric Approach</strong>: We put you first, prioritizing your needs to create a convenient and inspiring omni channel shopping experience.
                                        </Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.75, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Quality and Value</strong>: We offer high-quality products from iconic brands at prices that are accessible, ensuring you never have to compromise.
                                        </Typography>
                                    }
                                />
                            </ListItem>

                            <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.75, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" sx={{ color: '#333' }}>
                                            <strong>Transparency and Trust</strong>: With clear pricing and value propositions, we foster trust and build lasting relationships with our customers.
                                        </Typography>
                                    }
                                />
                            </ListItem>

                        </List>
                    </Box>

                    {/* Footer Text / Footprint Section */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            With 50+ stores across India, Megamart has a growing digital footprint of the one-stop destination
                            where everyday fashion meets smart savings, and serves as the perfect blend of style,
                            individuality, and accessible luxury.
                        </Typography>
                    </Box>

                </Container>


            </StyleBox>
        )
    }



    return (<>
        {FirstPage()}

    </>)
}

export default About;

const StyleBox = styled(Box)({

})