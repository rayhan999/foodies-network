import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import './RestaurantDetails.css';

import fakeData from '../../../Fakedata/RestaurantList.json';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../../Homepage/Cart/Cart';
import FoodItem from '../FoodItem/FoodItem';
import Header from '../../Header/Header';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [Restaurants, setRestaurants] = useState(fakeData);

    const { value1, value2, value3 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartOpen, setCartOpen] = value2;
    const [cartLength, setCartLength] = value3;

    const myRestaurant = Restaurants.find(restaurant => restaurant.restaurantId == id);
    // console.log(myRestaurant.restaurantName);
    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState('');

    const handleAddProduct = (item) => {
        const toBeAddedKey = item.id;
        const sameProduct = cart.find(foodItem => foodItem.id === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(foodItem => foodItem.id !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            item.quantity = 1;
            newCart = [...cart, item];
        }
        setCart(newCart);
        setCartLength(newCart.length)
        // addToDatabaseCart(item.id, count);
    }
    return (
        <div>
            <Header></Header>
            <div className="container" >
                <div class=" d-flex  justify-content-between align-items-center p-5" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
                    <div className="" >
                        <h1>{myRestaurant.restaurantName}</h1>
                        {
                            myRestaurant.restaurantMenu.map(item => <FoodItem key={item.id} item={item} handleAddProduct={handleAddProduct}></FoodItem>)
                        }

                    </div>
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

export default RestaurantDetails;