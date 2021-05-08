import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';
import Itemcard from '../Itemcard/Itemcard';

const ReviewItems = () => {
    const { value1, value3 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartLength, setCartLength] = value3;

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        setCartLength(newCart.length);
        // removeFromDatabaseCart(productKey);
    }

    // console.log(cart);
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1>Review</h1>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Image</th>
                            <th scope="col"> Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        cart.map(item => <Itemcard item={item} removeProduct={removeProduct}></Itemcard>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ReviewItems;