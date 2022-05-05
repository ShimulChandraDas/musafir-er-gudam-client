import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    //console.log(product);
    const { _id, img, quantity, name, price, description, supplier } = product;
    const navigate = useNavigate();

    const navigateInventoryUpdate = id => {
        //console.log(navigateInventoryUpdate);
        navigate(`/inventory/${id}`);

    }

    return (

        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} style={{ height: "300px" }} className="card-img-top" alt="..." />
                <div className={"card-body"}>
                    <h4 className='text-center'>{name}</h4>
                    <p className='text-center'><strong>$ {price}</strong></p>
                    <p className='text-center'><strong>Quantity: {quantity}</strong></p>
                    <p className="card-text">{description}</p>
                    <h5><strong>{supplier}</strong></h5>
                </div>
                <button onClick={() => navigateInventoryUpdate(_id)} type="button" className="btn btn-primary btn-lg">Update</button>
            </div>
        </div>

    );
};

export default Product;