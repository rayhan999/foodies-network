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

const RestaurantDetails = () => {
    const { id } = useParams();
    const [Restaurants, setRestaurants] = useState(fakeData);

    const { value1, value2 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartOpen, setCartOpen] = value2;
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
    // console.log(fakeData)
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
        // addToDatabaseCart(item.id, count);
    }
    return (
        <div className="container" >
            <div class=" d-flex  justify-content-between align-items-center p-5" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
                <div className="" >
                    <h1>{myRestaurant.restaurantName}</h1>
                    {
                        myRestaurant.restaurantMenu.map(item => <FoodItem key={item.id} item={item} handleAddProduct={handleAddProduct}></FoodItem>)
                    }

                </div>
                {
                    cartOpen ?
                        <div className="p-5" style={{ position: "absolute", top: "11vh", right: "0", height: "89vh", backgroundColor: "red", transition: "0.5s ease-in-out" }}>
                            <Cart cart={cart}></Cart>
                        </div>
                        :
                        <div className="p-5 cartClose" style={{ position: "absolute", top: "11vh", right: "-270px", height: "89vh", backgroundColor: "red", transition: "0.5s ease-in-out" }}>
                            <Cart cart={cart}></Cart>
                        </div>
                }
            </div>
        </div>
    );
};

export default RestaurantDetails;