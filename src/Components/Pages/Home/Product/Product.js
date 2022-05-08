import React from 'react';
import { useNavigate } from 'react-router-dom';


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
            <div className="card m-3 " style={{ width: "18rem" }}>
                <img src={img} style={{ height: "300px" }} className="card-img-top" alt="..." />
                <div className={"card-body"}>
                    <h5 className='text-center'>{name}</h5>
                    <p> <strong>Supplier: {supplier}</strong></p>
                    <div className='d-flex justify-content-between'>
                        <small className='text-center'><strong>Price: $ {price}</strong></small>
                        <small className='text-center'><strong>Quantity: {quantity}</strong></small>
                    </div>
                    <p className="card-text pt-2">{description}</p>

                </div>
                <button onClick={() => navigateInventoryUpdate(_id)} type="button" className="btn btn-success btn-lg">Update</button>
            </div>
        </div>

    );
};

export default Product;