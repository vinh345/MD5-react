import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../action/action';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <img src={product.image} alt={product.name} style={{width:"250px"}}/>
            <h2>{product.name}</h2>
            <p>{product.price} VND</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
