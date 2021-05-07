import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Cart = (props) => {

    const cart = props.cart;
    // console.log(cart);
    const { value1, value2 } = useContext(UserContext)

    const [cartOpen, setCartOpen] = value2;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        // console.log(product.price, product.quantity)
        total = total + product.price * product.quantity || 1;
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
            <Link to="/review">
                <button className="btn btn-warning">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;