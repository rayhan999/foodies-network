import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Itemcard from '../Itemcard/Itemcard';

const ReviewItems = () => {
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        // removeFromDatabaseCart(productKey);
    }
    const { value1, value2 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartOpen, setCartOpen] = value2;
    console.log(cart);
    return (
        <div>
            <h1>Review</h1>
            {
                cart.map(item => <Itemcard item={item} removeProduct={removeProduct}></Itemcard>)
            }
        </div>
    );
};

export default ReviewItems;