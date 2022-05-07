import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const UpdatedQuantity = { quantity };
        const url = `http://localhost:5000/inventory/${inventoryId}`;
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
                alert('users added successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div className='text-center container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2'>Updated Quantity of:{inventory.name} </h2>
            <Form className='border pt-2 ' onSubmit={handleUpdateQuantity}>
                <Form.Group className="mb-3" controlId="formBasicPInventory">
                    <Form.Control type="text" name="name" value={inventory.name} readOnly placeholder="Product Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" name="price" value={inventory.price} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" name="quantity" placeholder="Enter Restock Quantity" required />
                </Form.Group>

                {/* <input className='mb-3' type="number" placeholder='Add Quantity' name="quantity" id="" /> <br /> */}
                {/* <input type="submit" value="Update Quantity" /> */}

                <Button variant="primary w-100 mx-auto d-block mb-2" type="submit">
                    Update Quantity
                </Button>
            </Form>

        </div>
    );
};

export default ProductUpdate;






// const ProductUpdate = () => {
//     const { inventoryId } = useParams();
//     const [inventory] = useInventoryDetails(inventoryId);
//     const [user] = useAuthState(auth);
//     // if (user) {
//     //     console.log(user);
//     // }
//     const handleUpdateQuantity = event => {
//         event.preventDefault();
//         const update = {
//             inventory: inventory.name,
//             inventoryId: inventoryId,
//             quantity: event.target.quantity.value,
//             supplier: event.target.supplier.value

//         }
//     }
//     return (
//         <div className='container w-50 mx-auto'>
//             <h2 className='text-center text-success mt-2 '>Update  Inventory: {inventory.name}</h2>

//             <Form onSubmit={handleUpdateQuantity} className='border p-5' >
//                 <Form.Group className="mb-3" controlId="formBasicPInventory">
//                     <Form.Control type="text" name="name" value={inventory.name} readOnly placeholder="Product Name" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control type="number" name="price" value={inventory.price} required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control type="text" name="supplier" value={user.displayName} readOnly required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control type="text" name="quantity" placeholder="Enter Restock Quantity" required />
//                 </Form.Group>

//                 <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
//                     Update
//                 </Button>
//             </Form>
//             {/* {errorElement} */}

//         </div>
//     );
// };

// export default ProductUpdate;