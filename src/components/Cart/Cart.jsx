import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; //option 1
    // const {cart} = props;  //option 2
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;   
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice/100*7.;
    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className='cart'>
           <h2 style={{textAlign: "center"}}>Order summary</h2>
            <p>Selected Items: {quantity}</p>  
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tex: {tax.toFixed(2)}</p>
            <h6 style={{fontStyle: 'normal', fontWeight:'400', fontSize:'21px'}}>Grand Total: {grandTotal}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span className='btnn'>Clear Cart</span>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            {children}
        </div>
    );
};

export default Cart;