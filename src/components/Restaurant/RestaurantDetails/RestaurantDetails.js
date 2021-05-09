import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import './RestaurantDetails.css';

import fakeData from '../../../Fakedata/RestaurantList.json';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../../Homepage/Cart/Cart';
import FoodItem from '../FoodItem/FoodItem';
import Header from '../../Header/Header';

const RestaurantDetails = () => {
    const history = useHistory();
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
            <div className="container pt-5" >
                <div class=" d-flex  justify-content-between align-items-center pt-5" >
                    <div className="" >
                        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center" style={{ width: '80vw' }}>
                            <img src={myRestaurant.restaurantLogo} alt="" className="img-fluid restaurantLogo" /><br />
                            <h1>{myRestaurant.restaurantName}</h1>
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                                <h4>{myRestaurant.restaurantAddress}</h4> &nbsp;&nbsp;||&nbsp;&nbsp;
                                <h4>Delivery Cost: {myRestaurant.restaurantDeliveryCost} BDT</h4> &nbsp;&nbsp;||&nbsp;&nbsp;
                                <h4>Rating: {myRestaurant.restaurantRating}</h4>
                            </div>
                        </div>
                        <h2 className="pt-5">Menu List:</h2>
                        {
                            myRestaurant.restaurantMenu.map(item => <FoodItem key={item.id} item={item} handleAddProduct={handleAddProduct}></FoodItem>)
                        }

                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">

                            <Cart cart={cart} isModal={true}>
                                <button className="btn btn-warning" data-bs-dismiss="modal" onClick={() => history.push(`/review`)}>Review Order</button>
                            </Cart>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;