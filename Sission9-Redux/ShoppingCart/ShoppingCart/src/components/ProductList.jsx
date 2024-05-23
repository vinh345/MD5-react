import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import '../App.css'

const ProductList = () => {
    const products = useSelector(state => state.products);

    return (
        <div className='product'>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
