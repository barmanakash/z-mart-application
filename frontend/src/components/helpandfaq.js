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

function HelpAndFAQ() {

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
            Frequently Asked Questions
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
        Frequently Asked Questions
      </Typography>

      {/* ==================== FREQUENTLY ASKED QUESTIONS SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          FREQUENTLY ASKED QUESTIONS:
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0, alignItems: 'flex-start' }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I locate a store near me?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>To find a store near you, use the ‘Store Locator’ section on our website. Just enter your pin code, and a list of the nearest Megamart stores will be displayed.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0, alignItems: 'flex-start' }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What exactly is the ‘Omnichannel Experience’?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>The 'omnichannel experience' at Megamart aims to provide a seamless shopping journey by connecting both offline and online retail experiences. We have integrated our online platform with select stores, allowing you to start, continue, or complete your shopping anytime and anywhere you prefer.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0, alignItems: 'flex-start' }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What are the advantages of the Omnichannel Experience?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>With Megamart's omnichannel experience, you have the flexibility to start shopping on your laptop or phone and complete it at a Megamart store near you, or vice versa. This approach gives you full control over your shopping journey, enhancing convenience and elevating your experience. Megamart allows you to choose whether to shop online or visit a store, depending on what suits you best. To ensure you receive your order as quickly as possible, Megamart also offers same-day pickup, so you can shop online and collect your items on the go.</Typography>}
            />
          </ListItem>
        </List>
      </Box>

      {/* ==================== YOUR ACCOUNT SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          YOUR ACCOUNT:
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Is it necessary to create an account to shop at Megamart?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>While you can browse our website without logging in, an account is required to make a purchase. Your account stores your name, address, and contact information, and creating one is a quick, three-step process.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I change my account information?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  Log in to your account on the Megamart website.<br />
                  Go to ‘My Information’.<br />
                  Make the necessary changes and click ‘Save’.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Forgot your password?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  If you need a new password, follow these steps:<br />
                  Visit the Megamart login page.<br />
                  Select ‘Forgot Password’.<br />
                  Check your registered email for a message from us.<br />
                  Click the link in the email and follow the instructions to reset your password.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Can I use my Google or Facebook accounts to log in?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Yes, you can use your Google or Facebook accounts to log in. Simply go to the Login page and select either option to get started.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I change my billing and shipping address?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  Log in to your Megamart account.<br />
                  Navigate to ‘My Addresses’ and click ‘Edit’.<br />
                  Update or replace your address.<br />
                  Click ‘Save’ to confirm the changes.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>

      {/* ==================== ORDER INFORMATION SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          ORDER INFORMATION:
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I access my order history?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  Sign in to your Megamart account.<br />
                  Click on ‘My Megamart’ at the top right corner of your screen.<br />
                  Select ‘My Account’ to view your order history.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I track my order?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  You will receive SMS and email notifications whenever there is an update to your shipment status. You can also check the status of your order through your Megamart account at any time.<br />
                  Log in to your account.<br />
                  Go to ‘Order Details’ and click on ‘Order Tracking.’
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Can I change my order after it has been placed?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>No, once an order is confirmed, we cannot make any changes, such as adding or substituting items or increasing the quantity. If you need additional items, please place a new order.</Typography>}
            />
          </ListItem>
        </List>
      </Box>

      {/* ==================== ADDRESS SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          ADDRESS:
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
          If your delivery address changes, please contact us before the invoice is generated, and we will update the shipping address accordingly. If your order is sent to an incorrect address, it will be returned to the original shipping location. For prepaid orders, a refund will be issued to your bank account. For ‘Cash on Delivery’ orders, we recommend placing a new order with the correct address.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
          Please note that once an order is placed, we are unable to change the pick-up location for store pickups.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 3 }}>
          While we strive to accommodate delivery changes to meet your needs, modifications can only be made upto a certain point in the order process. Beyond that, additional costs or delays may apply. For any changes to an existing Megamart order, please contact us promptly.
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What is the store pickup option and how do I select it?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  The store pickup option allows you to pick up your Megamart order from a nearby store for quicker access. To choose this as your delivery method:<br />
                  Go to the checkout page and choose your shipping method.<br />
                  Enter your pin code and select ‘Show Options.’<br />
                  Choose the ‘Store Pickup’ option.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I get my Megamart order delivered as soon as possible?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>You can opt for same-day or next-day delivery for an extra fee when placing your order, provided the product is available at the nearest hub or store and the invoice has not yet been generated.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How long will it take for my Megamart order to arrive?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>To check the delivery time for your area, enter your pin code on the product page. After placing your order, you will receive an email with the estimated delivery dates.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Can I place a bulk order with Megamart?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Megamart does not accept bulk orders or orders of more than five of the same items at a time.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Is there a warranty or guarantee on Megamart products?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>All Megamart merchandise is genuine and sourced directly from the brand. All products sold by Megamart are covered by the brand's warranty.</Typography>}
            />
          </ListItem>
        </List>
      </Box>

      {/* ==================== TRACKING & DELIVERY SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          TRACKING & DELIVERY:
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 3 }}>
          If you require a no-contact delivery or return, you can contact our courier partner to request this service.
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Why is the estimated delivery date different from the date given when the order was placed?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>The estimated delivery time provided at checkout is an approximation. Once an order is placed, we identify the nearest store to your address and update the delivery time based on its proximity. This process may result in a variation between the initial and updated delivery dates.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>DELIVERY FEES?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>We offer free shipping on orders of ₹1,499 or more. For orders under ₹1,499, a delivery fee of ₹49 applies.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>When can I expect delivery of my orders?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>We typically deliver on all days; however, there may be occasional delays due to national holidays or unforeseen circumstances.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Why doesn't Megamart deliver to some areas?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>In certain cases, our courier partners may not yet service your zip code, which can prevent us from delivering to your location. We are continuously expanding our delivery network in collaboration with reliable courier companies to enhance our reach.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Does Megamart ship internationally?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>No, we currently do not offer international shipping.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Why did I receive only part of my order?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Your orders may be dispatched from multiple locations across the country. Typically, the shipment closest to your address will arrive first. You will receive email notifications once the remaining items are dispatched or in transit.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Can I pick up my order in person after placing it online?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  An SMS will be sent to your registered mobile number when your order is ready for pickup.<br />
                  An email will also be sent to your registered email address with the pickup details.<br />
                  Live tracking of your order will be available on the "My Orders" page.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How long do I have to pick up my order from the store?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>You have 72 hours to collect your order after receiving the pickup confirmation via SMS, email, or live tracking. If you are unable to pick it up within this time, the order will be automatically canceled, and you will need to place a new order.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Can I pay for my order when I pick it up in the store?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Yes, payment can be made in-store using cash, credit, or debit cards.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What do I need to bring to the store for order pickup?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Please have the confirmation message containing your Megamart Order ID, sent to your registered mobile number or email, available at the time of pickup.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>If I am unable to collect my order in person?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Someone else can pick up your order on your behalf. They must present the confirmation message with your Megamart Order ID sent to your registered mobile number or email.</Typography>}
            />
          </ListItem>
        </List>
      </Box>

      {/* ==================== RETURNS SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          RETURNS:
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
          What is the return policy of Megamart?
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 2 }}>
          At Megamart, we offer a 15-day return policy for items purchased from our store. All returned items must pass our quality control checklist before a refund or replacement is processed. Items should be returned to their original condition with all tags attached. Please note that this policy does not cover items damaged due to neglect, improper use, or incorrect application.
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, mb: 3 }}>
          Special rules may apply to promotional offers and can take precedence over the standard return policy. Delivery and convenience fees are non-refundable, and refunds for cash-on-delivery purchases are processed via NEFT transactions. We do not accept returns on innerwear. However, recognizing the potential for damage, these items may only be returned within three days of receipt, subject to inspection.
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Is it possible to return only a portion of your order?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Yes, you can return individual items from your order. Each returned item will receive a unique return ID, which will be sent to your registered email address.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Why was my return request denied?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Return requests may be denied if the product does not meet the requirements outlined in our return policy.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What happens to the delivery charges upon return?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Delivery charges are non-refundable.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How do I return multiple items from the same order?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  Sign in to your Megamart account and select 'My Account.'<br />
                  Initiate a return for each product you wish to return.<br />
                  Pack each item separately and include its corresponding return ID.<br />
                  Label each package with the appropriate return ID.<br />
                  Hand over the packages to the delivery executive at the address you select.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>

      {/* ==================== CANCELLATIONS SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          CANCELLATIONS:
        </Typography>

        <List sx={{ disablePadding: true, pl: 2, mb: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What is the cancellation policy?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  To cancel your order, please email us at{' '}
                  <Link href="mailto:care@mzmart.com" underline="always" sx={{ color: '#3366cc' }}>
                    care@zmart.com
                  </Link>{' '}
                  before it is dispatched from our warehouse or store. If the order has already been shipped, you may refuse delivery upon its arrival.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>How are refunds handled?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  Refunds are processed based on the original method of payment.<br />
                  In-store payment or cash on delivery: Refunds will be initiated within seven business days after passing our quality check. The refund will be made via National Electronic Funds Transfer (NEFT).<br />
                  Online payment via credit card, debit card, or net banking: Refunds will be initiated within seven business days after our quality check and will be credited to the original payment source.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Why was my refund less than the original payment?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>If your product was part of a promotional offer with specific terms and conditions, the refunded amount might be less than your original payment. If the promotion no longer applies to your entire order, the total order price will be adjusted accordingly, and the difference will be deducted from your refund.</Typography>}
            />
          </ListItem>
        </List>

        <Typography variant="body1" sx={{ color: '#333', mb: 4 }}>
          If you believe there has been an error on our part, please email us at{' '}
          <Link href="mailto:care@zmart.com" underline="always" sx={{ color: '#3366cc' }}>
            care@zmart.com
          </Link>{' '}
          , and we will respond as soon as possible.
        </Typography>
      </Box>

      {/* ==================== ADDITIONAL QUERIES SECTION ==================== */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
          ADDITIONAL QUERIES:
        </Typography>

        <List sx={{ disablePadding: true, pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What payment methods are available?</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                  You can choose from the following payment options:<br />
                  <strong>Online Payments</strong> using credit cards, debit cards, or internet banking.
                </Typography>
              }
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Can I pick up my online order at a store?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Yes, this is possible. Customers who wish to receive their Megamart purchases immediately can select 'Store Pick-Up' at checkout. This option is applicable for prepaid orders only.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Is it secure to use credit or debit cards on Megamartfashions.com?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Yes, we have partnered with trusted payment gateways to ensure that all payments made on our platform are safe and secure.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>What should I do if my order was not confirmed, but the money was deducted from my account?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>If your order was not confirmed but payment was deducted, the amount will be refunded to your account within 5 to 7 business days. Meanwhile, you are welcome to place a new order for your desired items.</Typography>}
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 1.5, px: 0 }}>
            <ListItemText
              primary={<Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>Why is there a difference in prices and promotions between offline stores and Megamartfashions.com?</Typography>}
              secondary={<Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>Megamart operates in an omnichannel environment with both online and offline stores. Prices and promotions may vary depending on location and events, though we strive to maintain consistency. Some offers may be exclusive to online or offline stores or specific to certain cities.</Typography>}
            />
          </ListItem>
        </List>
      </Box>

    </Container>
               
            </MainBox>
        )
    }


    return (
        <>{FirstPage()}</>
    )
}

export default HelpAndFAQ;

const MainBox = styled(Box)({})