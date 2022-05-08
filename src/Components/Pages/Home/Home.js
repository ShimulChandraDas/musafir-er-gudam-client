import React from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Products from './Products/Products';
import UpComing from './UpComing/UpComing';

const Home = () => {
    return (
        <div className='container'>
            <Banner />
            <Products />
            <UpComing />
            <ContactUs />

        </div>
    );
};

export default Home;