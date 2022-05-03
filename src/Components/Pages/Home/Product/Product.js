import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    console.log(product);
    const { img, name, price, description, supplier } = product;
    return (

        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} style={{ height: "300px" }} className="card-img-top" alt="..." />
                <div className={"card-body"}>
                    <h4 className='text-center'>{name}</h4>
                    <p className='text-center'><strong>$ {price}</strong></p>
                    <p className="card-text">{description}</p>
                    <h5><strong>{supplier}</strong></h5>
                </div>
                <button type="button" className="btn btn-primary btn-lg">Update</button>
            </div>
        </div>

    );
};

export default Product;