import {
    Box,
    styled,
    Typography,
    Container,
    Breadcrumbs,
    Link,
    Button,
    TextField
} from '@mui/material';
import React, { useState } from 'react';

function Map() {
    const [locationQuery, setLocationQuery] = useState('Jabalpur, Madhya Pradesh');
    const [mapUrl, setMapUrl] = useState(
        'https://www.google.com/maps?q=Jabalpur,+Madhya+Pradesh&output=embed'
    );

    const handleSearch = (event) => {
        event.preventDefault();
        const trimmedQuery = locationQuery.trim();
        if (!trimmedQuery) {
            return;
        }

        const encodedQuery = encodeURIComponent(trimmedQuery);
        setMapUrl(`https://www.google.com/maps?q=${encodedQuery}&output=embed`);
    };

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
                                    Store Locator
                                </Typography>
                            </Breadcrumbs>
                        </Box>

                        <Typography sx={{ mb: 1, fontWeight: 700 }}>Search Location*</Typography>

                        <Box component="form" onSubmit={handleSearch} className="textfield">
                            <TextField
                                type="text"
                                className="inputfield"
                                placeholder="Enter city, store, or landmark"
                                value={locationQuery}
                                onChange={(event) => setLocationQuery(event.target.value)}
                                inputProps={{ 'aria-label': 'Search location' }}
                            />
                            <Button type="submit" className="btnstyle">
                                Find Stores
                            </Button>
                        </Box>
                    </Container>
                </Box>
                <Box>
                    <iframe
                        src={mapUrl}
                        width="900"
                        height="500"
                        style={{ border: 0, maxWidth: '100%' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </Box>
            </StyleBox>
        );
    };

    return <>{firstPage()}</>;
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