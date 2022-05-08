import React from 'react';
import { Table } from 'react-bootstrap';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GrUpdate, GrDeliver } from 'react-icons/gr';
import useInventory from '../../../hooks/useInventory';
import { Link } from 'react-router-dom';


const ManageInventory = () => {
    //const { inventoryId } = useParams();
    const [products, setProducts] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://rocky-wildwood-46157.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);

                })
        }
    }

    const handleDelivered = id => {
        console.log(id.quantity);
        const delivered = products?.quantity - 1;
        console.log(products?.quantity);
        const url = `https://rocky-wildwood-46157.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(delivered),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }


    return (
        <div className='container  mx-auto'>
            <h2 className='text-center text-success mt-2 mb-2'>Manage my inventory</h2>

            <div className='container mt-4'>
                {
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr className='text-center'>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier</th>
                                <th>Action</th>
                            </tr>
                            {
                                products.map(product =>
                                    <tr key={product._id} >
                                        <td>{product.name}</td>

                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.supplier}</td>
                                        <td>
                                            <Link to={`/inventory/${product._id}`}><button className='bg-danger text-white rounded mx-4'>Update <GrUpdate className='g-2' /></button></Link>
                                            <button onClick={() => handleDelivered(product._id)} className='bg-danger text-white rounded mx-4'>Delivered <GrDeliver className='g-2' /> </button>
                                            <button onClick={() => handleDelete(product._id)} className='bg-danger text-white rounded '> Delete <RiDeleteBin5Fill className='g-2' /> </button>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </Table>

                }
            </div>
        </div>

    );
};

export default ManageInventory;