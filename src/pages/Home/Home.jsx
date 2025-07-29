import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import AgriProducts from '../../components/AgriProducts/AgriProducts';
import LandProducts from '../../components/LandProducts/LandProducts';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import WhyUs from '../../components/WhyUs/WhyUs';
import Contact from './Contact/Contact';
import Headline from '../../components/Headline/Headline';
import CustomerFeedback from '../../components/CustomerFeedback/CustomerFeedback';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Hero></Hero>
             <AgriProducts></AgriProducts>
             <div className='mt-20'>
             <LandProducts ></LandProducts>
             </div>
             <CustomerReviews></CustomerReviews>
             <WhyUs></WhyUs>
             <Headline></Headline>
             <CustomerFeedback></CustomerFeedback>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;