import React from 'react';
import { Button } from 'react-bootstrap';

const UpComing = () => {

    return (
        <div className='container text-center mt-5'>

            <div className='bg-info p-5 ' id='UpComing' style={{ height: "300px" }} >

                <h1>LET'S STAY IN TOUCH</h1>
                <p>Get updates on sales specials and more</p>
                <input className='form-control' type="text" placeholder="Your Email"></input>
                <Button className='w-40 mt-3' variant="success" size="lg">
                    SUBSCRIBE
                </Button>

            </div>



        </div>
    );
};

export default UpComing;