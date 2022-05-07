import React, { useEffect, useState } from 'react';
import Product from '../../Home/Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    console.log();
    useEffect(() => {
        fetch('https://rocky-wildwood-46157.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='products'>
            <h2 className='text-center m-5'>All Products: {products.length}</h2>
            <div className='row'>
                {
                    products.map((product) => <Product
                        key={product._id}

                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;