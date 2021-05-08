import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import fakeData from '../../../Fakedata/index';
import Cart from '../Cart/Cart';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';

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
        <div>
            <Header></Header>

            <div className="container ">
                <div class=" d-flex  justify-content-between align-items-center p-5">
                    <div className="" >
                        <h1>{fakeData.length}</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                            {
                                Restaurants.map(restaurant => <Restaurant restaurant={restaurant}></Restaurant>)
                            }
                        </div>
                    </div>
                    {/* {
                    cartOpen ?
                        <div className="p-5" style={{ position: "absolute", right: "0", height: "100vh", backgroundColor: "red", transition: "0.5s ease-in-out" }}>
                            <Cart cart={cart}></Cart>
                        </div>
                        :
                        <div className="p-5" style={{ position: "absolute", right: "-270px", height: "100vh", backgroundColor: "red", transition: "0.5s ease-in-out" }}>
                            <Cart cart={cart}></Cart>
                        </div>
                } */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">

                            <Cart cart={cart}></Cart>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RestaurantList;