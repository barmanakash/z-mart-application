import {
    Container,
    Typography,
    Box,
    Breadcrumbs,
    Link,
    styled
} from '@mui/material';
import React from 'react'

function PrivacyPolicy() {

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
                                Privacy Policy
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
                        Privacy Policy
                    </Typography>

                    {/* Intro Section */}
                    <Box sx={{ color: '#333', lineHeight: 1.7, mb: 4 }}>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Megamart Lifestyle Brands Limited ("Megamart") is committed to protecting your personal information and ensuring it is used responsibly. This notice outlines the privacy policy for the website www.megamart.com (the "Website"). By using the Website, you consent to the practices described in this privacy policy.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4 }}>
                            By accessing the Website, you explicitly agree to our collection, use, and disclosure of your personal information as outlined in this privacy policy, which is incorporated into and subject to our Terms of Use.
                        </Typography>
                    </Box>

                    {/* 1. Collection of Personal Information */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            1. Collection of Personal Information
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            When you use our website, we may collect and store personal information you provide. Our primary goal in collecting this information is to provide you with a safe, efficient, and customized experience. This information will help us deliver services related to your use of our website and customize its features to best meet your needs.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            You can browse our website without disclosing any personal information. However, once you provide personal information, you are no longer anonymous to us. You may choose not to provide certain information by not using services or features of the Website.
                            <br />
                            We may automatically track certain information about you based on your behavior on the Website, including the URL you just visited, the URL you visit next, your browser information, and your IP address. This information is aggregated and analyzed to understand user demographics, interests, and behavior, allowing us to enhance your experience.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            We use cookies and similar technologies to analyze web page traffic, measure promotional effectiveness, and promote trust and safety. Cookies are small files stored on your device that enable us to provide certain services. Cookies may help you enter your password less frequently and provide information tailored to your interests. Most cookies are session-based and automatically deleted after each session. You can decline cookies, but this may limit your ability to use certain features.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            You may also encounter third-party cookies on certain pages. Megamart does not control the use of cookies by third parties.
                            <br />
                            If you shop on the Website, we collect information about your shopping behavior. If you make a purchase, our payment gateway provider may collect additional information, such as your billing address, credit or debit card number, and expiration date.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            If you post messages, leave feedback, or correspond with us or other users, we may collect and retain such information to resolve disputes, provide customer support, and troubleshoot problems.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            When you register or create an account, we collect personally identifiable information such as your email address, name, and phone number. The payment gateway provider may also collect credit/debit card details and other payment information. We use your contact details to send offers based on your previous orders and interests.
                        </Typography>
                    </Box>

                    {/* 2. Use of Personal Information */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            2. Use of Personal Information
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            We use your personal information to fulfill your orders, ensure safe transactions, measure consumer interest in our products and services, inform you about offers and updates, and customize your experience. We also use this information to detect and prevent fraud or other illegal activities, enforce our Terms and Conditions, and for other purposes as disclosed at the time of collection. We may collect and analyze demographic and profile data about our users' activity on the Website to improve our offerings continually.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            Your IP address helps us diagnose server problems and administer the Website, as well as identify users and gather demographic information.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            We may occasionally ask you to complete optional online surveys to provide content that may interest you.
                        </Typography>
                    </Box>

                    {/* 3. Sharing of Personal Information */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            3. Sharing of Personal Information
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            We may share your personal information with our corporate entities and affiliates. These entities may market to you unless you opt out.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            We may disclose personal information to third parties when required to provide you access to the Website, comply with legal obligations, enforce our Terms and Conditions, or prevent fraud or illegal activities. We do not disclose personal information to third parties for their marketing purposes without your explicit consent.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            Our products or services may include third-party services that may collect and use your information.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            We may disclose personal information if required by law or in response to court orders, to enforce our policies, respond to claims, or protect the rights, property, or safety of our users or the public.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            If Megamart undergoes a merger, acquisition, reorganization, or restructuring, your personal information may be transferred to the new entity, which will be required to adhere to this privacy policy.
                        </Typography>
                    </Box>

                    {/* 4. Links to Other Websites */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            4. Links to Other Websites
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            Our website may contain links to other websites that may collect personal information. Megamart is not responsible for the privacy practices or content of those external sites.
                        </Typography>
                    </Box>

                    {/* 5. Security Measures */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            5. Security Measures
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            We implement stringent security measures to protect against the loss, misuse, or alteration of the information under our control. We use secure servers whenever you access or change your account information. Once we receive your information, we follow strict security guidelines to prevent unauthorized access.
                        </Typography>
                    </Box>

                    {/* 6. Opt-Out Choices */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            6. Opt-Out Choices
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
                            All users can opt out of receiving non-essential communications, such as promotional and marketing-related messages, from us or our partners.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            If you wish to remove your contact information from our lists and newsletters, you may "unsubscribe" or contact us at{' '}
                            <Link href="mailto:care@megamart.com" underline="hover" color="primary">
                                care@megamart.com
                            </Link>{' '}
                            to request data deletion.
                        </Typography>
                    </Box>

                    {/* 7. Advertisements on Our Website */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            7. Advertisements on Our Website
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            We use third-party advertising companies to display ads on our website. These companies may use information about your visits to this and other websites to provide ads about goods and services of interest to you.
                        </Typography>
                    </Box>

                    {/* 8. Consent */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            8. Consent
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            By using the Website or providing your information, you consent to the collection, use, and sharing of your information as described in this privacy policy. If we make changes to our privacy policy, we will post the updated policy on this page to keep you informed of what information we collect, how we use it, and under what circumstances we may disclose it.
                        </Typography>
                    </Box>

                    {/* 9. Inquiries and Concerns */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                            9. Inquiries and Concerns
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
                            If you have any concerns, grievances, or issues related to the use of the Website, the products sold, any related services, or this privacy policy, please contact us at{' '}
                            <Link href="mailto:care@megamart.com" underline="hover" color="primary">
                                care@zmart.com
                            </Link>{' '}
                            with a detailed description, and we will attempt to resolve the issue promptly.
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

export default PrivacyPolicy;

const StyleBox = styled(Box)({

})