import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
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
                {
                    props.isModal &&
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                }

            </div>
            <div class="modal-body">

                <p>Items Ordered: {cart.length}</p>
                <p>Product Price: {formatNumber(total)}</p>

            </div>
            <div class="modal-footer">

                {
                    props.children
                }

            </div>
        </div>


    );
};

export default Cart;