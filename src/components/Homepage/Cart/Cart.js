import React from 'react';

const Cart = (props) => {
    console.log(props.cart);

    const cart = props.cart;
    let total = 0;
    if (cart.length !== 0) {
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            console.log(product.price, product.quantity)
            total = total + product.price * product.quantity || 1;
        }
    } else {

    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
        </div>
    );
};

export default Cart;