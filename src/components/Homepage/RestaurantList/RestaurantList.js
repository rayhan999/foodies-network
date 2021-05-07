import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import fakeData from '../../../Fakedata/RestaurantList.json';

const RestaurantList = () => {
    const [Restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        setRestaurants(fakeData);
    }, [])
    return (
        <div className="container">

            <h1>{fakeData.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {
                    Restaurants.map(restaurant => <Restaurant restaurant={restaurant}></Restaurant>)
                }
            </div>
        </div>
    );
};

export default RestaurantList;