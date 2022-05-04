import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='bg-dark mt-5 pt-5 pb-5'>
            <p className='text-center text-white '><small>copyright &copy; {year}All right reserved to Musafir</small></p>
        </footer>
    );
};

export default Footer;