import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import fakeData from '../../../Fakedata/index';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';
import { useHistory } from 'react-router';

const RestaurantList = () => {
    const history = useHistory();
    const [Restaurants, setRestaurants] = useState([]);
    const { value1 } = useContext(UserContext)
    const [cart, setCart] = value1;

    useEffect(() => {
        setRestaurants(fakeData);
    }, [])



    return (
        <div>
            <Header></Header>

            <div className="container pt-5" >
                <div class=" d-flex  justify-content-between align-items-center pt-5 ">
                    <div className="" >
                        <h2>Nearby Restaurants</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                            {
                                Restaurants.map(restaurant => <Restaurant restaurant={restaurant}></Restaurant>)
                            }
                        </div>
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

export default RestaurantList;