import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';




const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://rocky-wildwood-46157.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div id='products'>
            <div>
                <h2 className='text-center m-5'>All Products: {products.length}</h2>
                <div className='row'>
                    {
                        products.slice(0, 6).map((product) => <Product
                            key={product._id}
                            product={product}
                        ></Product>)


                    }

                </div>

            </div>
        </div>
    );
};

export default Products;