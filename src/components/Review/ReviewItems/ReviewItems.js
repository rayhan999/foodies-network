import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';
import Cart from '../../Homepage/Cart/Cart';
import Itemcard from '../Itemcard/Itemcard';

const ReviewItems = () => {
    const { value1, value3 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartLength, setCartLength] = value3;

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        setCartLength(newCart.length);
    }
    const handleProceedCheckout = () => {
        //will take to payment gateway with total price
    }
    return (
        <div>
            <Header></Header>
            <div className="container pt-5 pb-5">


                <h2 className="pt-5">Selected Items</h2>
                <div className="row">
                    <div className="col-md-9">
                        <table class="table text-center">
                            <thead>
                                <tr>

                                    <th scope="col"> Image</th>
                                    <th scope="col"> Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {
                                cart.map(item =>

                                    <Itemcard item={item} removeProduct={removeProduct}></Itemcard>
                                )
                            }
                        </table>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart} isModal={false}>
                            <button onClick={handleProceedCheckout} className="btn btn-success">Proceed To Checkout</button>
                        </Cart >
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ReviewItems;