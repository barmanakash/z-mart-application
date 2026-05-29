import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Footer from './components/footer';
import LoginPage from './components/loginpage';
import LandingPage from './components/LandingPage';
import MenProduct from '../src/components/menProduct';
import WomenProduct from './components/women';
import KidsProduct from './components/kids';
import FootwearProduct from '../src/components/footwear'
import InnerwearProduct from './components/innerwear';
import AccessoriesProduct from './components/accessories';
import BrandsProduct from './components/brands';
import UsPoloBrandsClothsProduct from './components/uspolobrandscloths';
import ArrowProduct from './components/arrow';
import FlyingMachineClothsProduct from './components/flyingmachinecloth';
import TommyHilFigerClothsProduct from './components/tommyhilfiger';
import KelvinKleinClothsProduct from './components/calvinklein';
import AdByArvindClothsProduct from './components/adbyarvind';
import About from './components/aboutus';
import PrivacyPolicy from '../src/components/privacypolicy'
import TermsAndConditions from './components/termsandcoundition';
import ReturnAndCancellationPolicy from './components/returnandcancellationpolicy';
import HelpAndFAQ from './components/helpandfaq';
import DeliveryAndShippingPolicy from './components/deliveryandshippingpolicy';
import SiteMap from './components/sitemap';
import Map from './components/map';
import Message from './components/message';
import Wishlist from './components/wishlist';
import { WishlistProvider } from './components/wishlistcontext';

function App() {
  return (
    <WishlistProvider>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }}>
              <LandingPage />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }}>
              <Cart />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />

        <Route path='/men' element={<>
          <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }}>
            <MenProduct />
          </container>
          <Footer />
        </>} />

        <Route path='/women' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <WomenProduct />
            </container>
            <Footer />
          </>
        } />


        <Route path='/kids' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <KidsProduct />
            </container>
            <Footer />
          </>
        } />


        <Route path='/footwear' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <FootwearProduct />
            </container>
            <Footer />
          </>
        } />


        <Route path='/innerwear' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <InnerwearProduct />
            </container>
            <Footer />
          </>
        } />


        <Route path='/accessories' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <AccessoriesProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/brands' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <BrandsProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/uspolobrandscloths' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <UsPoloBrandsClothsProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/arrowcloths' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <ArrowProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/flyingmachine' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <FlyingMachineClothsProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/tommyhilfiger' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <TommyHilFigerClothsProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/clavineklein' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <KelvinKleinClothsProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/adbyarvindcloth' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <AdByArvindClothsProduct />
            </container>
            <Footer />
          </>
        } />

        <Route path='/aboutuspage' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <About />
            </container>
            <Footer />
          </>
        } />

        <Route path='/privacypolicy' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <PrivacyPolicy />
            </container>
            <Footer />
          </>
        } />


        <Route path='/termsandconditions' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <TermsAndConditions />
            </container>
            <Footer />
          </>
        } />

        <Route path='/returnandcancalltionpolicy' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <ReturnAndCancellationPolicy />
            </container>
            <Footer />
          </>
        } />

         <Route path='/helpandfaq' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <HelpAndFAQ />
            </container>
            <Footer />
          </>
        } />

         <Route path='/deliveryandshippingpolicy' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <DeliveryAndShippingPolicy />
            </container>
            <Footer />
          </>
        } />

        <Route path='/sitemap' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <SiteMap />
            </container>
            <Footer />
          </>
        } />

        <Route path='/mapdirection' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <Map />
            </container>
            <Footer />
          </>
        } />

        <Route path='/message' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <Message />
            </container>
            <Footer />
          </>
        } />

         <Route path='/wishlist' element={
          <>
            <container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }} >
              <Wishlist />
            </container>
            <Footer />
          </>
        } />








      </Routes>
    </Router>
    </WishlistProvider>
   
  );
}

export default App;