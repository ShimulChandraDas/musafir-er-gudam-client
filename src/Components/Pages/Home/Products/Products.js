import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products'>
            <h2 className='text-center m-5'>All Products: {products.length}</h2>
            <div className='row'>
                {
                    products.slice(0, 6).map((product) => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default Products;