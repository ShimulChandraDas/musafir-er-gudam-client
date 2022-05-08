import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ProductUpdate = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://rocky-wildwood-46157.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const UpdatedQuantity = { quantity };
        const url = `https://rocky-wildwood-46157.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedQuantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Quantity added successfully!!!');
                event.target.reset();
            })
    }



    return (
        <div className='text-center container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2'>Updated Quantity of:{inventory.name} </h2>
            <Form className='border pt-2 ' onSubmit={handleUpdateQuantity}>
                <Form.Group className="mb-3" controlId="formBasicPInventory">
                    <Form.Control type="text" name="name" value={inventory.name} disabled placeholder="Product Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" name="price" value={inventory.price} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" name="quantity" placeholder="Enter Restock Quantity" required />
                </Form.Group>
                <Button variant="primary w-100 mx-auto d-block mb-2" type="submit">
                    Update Quantity
                </Button>
                <ToastContainer />
            </Form>

        </div>
    );
};

export default ProductUpdate;
