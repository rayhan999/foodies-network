import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Cart = (props) => {
    const history = useHistory();
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

        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Order Summary</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div class="modal-body">

                <p>Items Ordered: {cart.length}</p>
                <p>Product Price: {formatNumber(total)}</p>
                <Link to="/review">
                    <button className="btn btn-warning">Review Order</button>
                </Link>
            </div>
            <div class="modal-footer">

                <button className="btn btn-warning" data-bs-dismiss="modal" onClick={() => history.push(`/review`)}>Review Order</button>

            </div>
        </div>


    );
};

export default Cart;