import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Rating: {ratings} Star</p>
                <p>Manufacturer: {seller}</p>
            </div>
            {/* <button onClick={monir} className='btn-cart'>Add to Cart</button> */}        
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                 <FontAwesomeIcon icon={faShoppingCart} />
                 </button>    
        </div>
    );
};

export default Product;