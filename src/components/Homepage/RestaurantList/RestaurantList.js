import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import fakeData from '../../../Fakedata/RestaurantList.json';
import Cart from '../Cart/Cart';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const RestaurantList = () => {
    const [Restaurants, setRestaurants] = useState([]);
    const { value1, value2 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartOpen, setCartOpen] = value2;
    console.log(cartOpen);
    useEffect(() => {
        setRestaurants(fakeData);
    }, [])

    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const itemId = Object.keys(savedCart);
    //     console.log(itemId);
    //     const previousCart = itemId.map(existingId => {
    //         const item = fakeData.find(i => i.id === existingId);
    //         // item.quantity = savedCart[existingId];
    //         return item;
    //     })
    //     setCart(previousCart);
    // }, [])

    return (
        <div className="container d-flex">
            <div
                class="row d-flex flex-sm-wrap-reverse flex-xs-wrap-reverse justify-content-between align-items-center p-5">
                <div className="col-md-9" >
                    <h1>{fakeData.length}</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                        {
                            Restaurants.map(restaurant => <Restaurant restaurant={restaurant}></Restaurant>)
                        }
                    </div>
                </div>
                {
                    cartOpen &&
                    <div className="col-md-3">
                        <Cart cart={cart}></Cart>
                    </div>
                }

            </div>
        </div>
    );
};

export default RestaurantList;