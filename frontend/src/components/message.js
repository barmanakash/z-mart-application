import React, { useState } from 'react'

import {
    Box,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Button,
    Paper,
    styled
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';





const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Customer Support' },
    { value: 'order', label: 'Order Status' },
    { value: 'returns', label: 'Returns & Exchanges' },
];



function Message() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted Data:', formData);
        // Add your form submission logic here
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };


    const FirstPage = () => {
        const isFormValid = formData.name && formData.email && formData.phone && formData.subject && formData.message;

        return (
            <StyleBox>
                <Box sx={{ maxWidth: 800, margin: '20px auto', padding: '0 16px', backgroundColor:'' }}>
                    {/* Contact Us Header Section */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1a1a1a' }}>
                        Contact Us
                    </Typography>

                    {/* Quick Contact Information Blocks */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        <Grid item xs={12} sm={6}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: '14px 16px',
                                    borderRadius: '8px',
                                    borderColor: '#e0e0e0'
                                }}
                            >
                                <PhoneIcon sx={{ color: '#5f6368', mr: 1.5, fontSize: 20 }} />
                                <Typography variant="body1" sx={{ color: '#3c4043' }}>
                                    +91-9740542174
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: '14px 16px',
                                    borderRadius: '8px',
                                    borderColor: '#e0e0e0'
                                }}
                            >
                                <MailOutlineIcon sx={{ color: '#5f6368', mr: 1.5, fontSize: 20 }} />
                                <Typography variant="body1" sx={{ color: '#3c4043' }}>
                                    care@megamartfashions.com
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Accordion / Enquire Now Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500, color: '#202124' }}>
                            Enquire Now
                        </Typography>
                        {/* <KeyboardArrowUpIcon sx={{ color: '#202124' }} /> */}
                    </Box>

                    {/* Main Interactive Form */}
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={3}>
                            {/* Name Input */}
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#202124' }}>
                                    Name *
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="name"
                                    placeholder="Enter Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    InputProps={{ style: { borderRadius: '8px' } }}
                                />
                            </Grid>

                            {/* Email Input */}
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#202124' }}>
                                    E-Mail *
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="email"
                                    type="email"
                                    placeholder="Enter E-Mail Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    InputProps={{ style: { borderRadius: '8px' } }}
                                />
                            </Grid>

                            {/* Phone Number Input */}
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#202124' }}>
                                    Phone No *
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    InputProps={{ style: { borderRadius: '8px' } }}
                                />
                            </Grid>

                            {/* Select Subject Dropdown */}
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#202124' }}>
                                    Select Subject *
                                </Typography>
                                <TextField
                                    select
                                    fullWidth
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    SelectProps={{
                                        displayEmpty: true,
                                        renderValue: (selected) => {
                                            if (!selected) {
                                                return <Typography sx={{ color: '#aaa' }}>Select Subject</Typography>;
                                            }
                                            return subjects.find(s => s.value === selected)?.label;
                                        }
                                    }}
                                    InputProps={{ style: { borderRadius: '8px' } }}
                                >
                                    {subjects.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            {/* Message Textarea */}
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#202124' }}>
                                    Message *
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="message"
                                    placeholder="Enter Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    InputProps={{ style: { borderRadius: '8px' } }}
                                />
                            </Grid>

                            {/* Action Buttons Container */}
                            <Grid item xs={12} sx={{ display: 'flex', gap: 2, mt: 1 }}>
                                <Button
                                    variant="outlined"
                                    onClick={handleCancel}
                                    sx={{
                                        flex: 1,
                                        borderRadius: '24px',
                                        textTransform: 'uppercase',
                                        borderColor: '#000',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        py: 1.5,
                                        '&:hover': {
                                            borderColor: '#333',
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                        },
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={!isFormValid}
                                    sx={{
                                        flex: 1,
                                        borderRadius: '24px',
                                        textTransform: 'uppercase',
                                        backgroundColor: isFormValid ? '#1a1a1a' : '#d3d3d3',
                                        color: isFormValid ? '#fff' : '#999',
                                        fontWeight: 'bold',
                                        py: 1.5,
                                        '&:hover': {
                                            backgroundColor: isFormValid ? '#333' : '#d3d3d3', cursor:'pointer'
                                        },
                                        '&:disabled': {
                                            backgroundColor: '#d3d3d3',
                                            color: '#ffffff'
                                        }
                                    }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>



            </StyleBox>
        )
    }



    return (
        <>
            {FirstPage()}
        </>
    )
}

export default Message;

const StyleBox = styled(Box)({

})