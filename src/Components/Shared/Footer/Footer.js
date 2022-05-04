import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer>
            <small>copyright &copy; {year}All right reserved to Musafir</small>
        </footer>
    );
};

export default Footer;