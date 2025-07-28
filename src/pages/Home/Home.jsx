import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import AgriProducts from '../../components/AgriProducts/AgriProducts';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Hero></Hero>
             <AgriProducts></AgriProducts>
        </div>
    );
};

export default Home;