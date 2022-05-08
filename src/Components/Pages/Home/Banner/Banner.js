import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../../images/banner/banner1.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "400px" }}
                    src={'https://i.ibb.co/fXjgwbx/camp.jpg'}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "400px" }}
                    src={'https://i.ibb.co/wMFRkM4/hils.jpg'}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "400px" }}
                    src={banner1}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;