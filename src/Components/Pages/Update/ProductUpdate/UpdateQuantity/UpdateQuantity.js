import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Update Quantity:{id}</h2>
        </div>
    );
};

export default UpdateQuantity;