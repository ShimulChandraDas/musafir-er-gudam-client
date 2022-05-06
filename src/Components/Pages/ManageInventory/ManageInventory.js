import React from 'react';
import { Table } from 'react-bootstrap';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';
import useInventory from '../../../hooks/useInventory';
import { Link, useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    //const { inventoryId } = useParams();
    const [products, setProducts] = useInventory();
    const navigate = useNavigate();
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
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


    return (
        <div className='container  mx-auto'>
            <h2>Manage my inventory</h2>

            <div className='container'>
                {
                    products.map(product => <Table key={products._id}>
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.supplier}</td>
                                <td><button onClick={() => handleDelete(product._id)} className='bg-danger text-white rounded '><RiDeleteBin5Fill /></button></td>
                                <td><Link to={`/inventory/${product._id}`}><button className='bg-danger text-white rounded '><GrUpdate /></button></Link></td>
                                {/* <td><button onClick={() => handleUpdate(product._id)} className='bg-danger text-white rounded '><GrUpdate /></button></td> */}
                            </tr>

                        </tbody>
                    </Table>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;