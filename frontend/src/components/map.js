import {
    Box,
    styled,
    Typography,
    Container,
    Breadcrumbs,
    Link,
    Card,
    CardContent,
    Divider,
    Button,
    TextField
} from '@mui/material';
import React from 'react';


function Map() {

    const firstPage = () => {
        return (
            <StyleBox>
                <Box>

                    <Container maxWidth="lg" sx={{ py: 4, fontFamily: 'sans-serif' }}>

                        {/* Breadcrumbs Navigation */}
                        <Box sx={{ mb: 2 }}>
                            <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ fontSize: '0.85rem' }}>
                                <Link underline="hover" color="inherit" href="/">
                                    Home
                                </Link>
                                <Typography color="text.primary" sx={{ fontSize: '0.85rem' }}>
                                    store Locator
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Typography>Search Location*</Typography>
                        <Box className="textfield">
                            <TextField
                                type="text"
                                className="inputfield"
                            />
                            <Button className="btnstyle">
                                Find Stores
                            </Button>
                        </Box>
                    </Container>

                </Box>
                <Box>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117371.0620145914!2d79.88635074315827!3d23.175831479477598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020616bc43e3b9!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1780039344176!5m2!1sen!2sin"
                        width="900"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </Box>
            </StyleBox>
        )
    }

    return (
        <>{firstPage()}</>
    )
}

export default Map;

// Styled Component implementation hook mapping custom properties
const StyleBox = styled(Box)({
    display:"flex",
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    justifyContent:"center",

    "& .btnstyle": {
        height: "30px",
        width: "150px",
        backgroundColor: "#FF6200",
        color: "black",
        borderRadius: '10px',
        fontFamily: "sans-serif"
    },
    "& .textfield": {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start"
    },

    "& .inputfield": {
        width: "200px"
    },

    "& .inputfield .MuiInputBase-root": {
        height: "40px"
    }
});