
import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenProduct from '../components/menProduct';
import { Link } from "react-router-dom";

function Men() {

    const FirstPage = () => {
        return (
            <StyleBox>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 5 }, py: 2, borderBottom: '1px solid #f0f0f0' }}>
                    <Typography component={Link} to='/men' className="design" > Men</Typography>
                    <Typography component={Link} to='/women' className="design">Women</Typography>
                    <Typography component={Link} to='/kids' className="design" >Kids</Typography>
                    <Typography component={Link} to='/footwear' className="design">Footwear</Typography>
                    <Typography component={Link} to='/innerwear'className="design">Innerwear</Typography>
                    <Typography component={Link} to='/accessories'className="design">Accessories</Typography>
                    <Typography component={Link} to='/brands'className="design">Brands</Typography>
                </Box >

            </StyleBox>
        )
    }


    return (
        <>
            {FirstPage()}
        </>
    );
}

export default Men;


const StyleBox = styled(Box)({
    "& .design": {
        display: 'block',
        color: '#555555',
        textDecoration: 'none',
        fontSize: '0.9rem',
        mb: 2,
        fontFamily: '"Inter", "Roboto", sans-serif',
        '&:hover': {
            color: '#000000'
        }

    }

})