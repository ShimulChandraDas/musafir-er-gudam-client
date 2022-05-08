import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='display-1 '>Oops!</h1>
            <h4 className='text-danger'>404</h4>
            <h3>Traveller is Sleeping....!!</h3>
            <img src={"https://cdn.lifehack.org/wp-content/uploads/2014/10/travel-sleeping-airport.jpg"} />
        </div>
    );
};

export default NotFound;