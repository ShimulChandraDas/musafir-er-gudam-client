import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../../../../hooks/useInventoryDetails';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init'


const ProductUpdate = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    const [user] = useAuthState(auth);
    // if (user) {
    //     console.log(user);
    // }
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const update = {
            inventory: inventory.name,
            inventoryId: inventoryId,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value

        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2 '>Update  Inventory: {inventory.name}</h2>

            <Form onSubmit={handleUpdateQuantity} className='border p-5' >
                <Form.Group className="mb-3" controlId="formBasicPInventory">
                    <Form.Control type="text" name="name" value={inventory.name} readOnly placeholder="Product Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" name="price" value={inventory.price} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="supplier" value={user.displayName} readOnly required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="quantity" placeholder="Enter Restock Quantity" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Update
                </Button>
            </Form>
            {/* {errorElement} */}

        </div>
    );
};

export default ProductUpdate;