import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';
import Cart from '../../Homepage/Cart/Cart';
import FoodItem from '../../Restaurant/FoodItem/FoodItem';
import Itemcard from '../Itemcard/Itemcard';

const ReviewItems = () => {
    const { value1, value3 } = useContext(UserContext)
    const [cart, setCart] = value1;
    console.log(cart);
    const [cartLength, setCartLength] = value3;

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        setCartLength(newCart.length);
        // removeFromDatabaseCart(productKey);
    }

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
                        cart.map(item =>

                            <Itemcard item={item} removeProduct={removeProduct}></Itemcard>
                        )
                    }
                </table>
                <div>
                    <Cart cart={cart}></Cart >
                </div>
            </div>
        </div >
    );
};

export default ReviewItems;