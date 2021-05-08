import React from 'react';
import { Link } from 'react-router-dom';

const Restaurant = (props) => {
    const { restaurantId, restaurantName, restaurantLogo, restaurantAddress, restaurantDeliveryCost, restaurantRating, restaurantMenu } = props.restaurant;
    return (


        <div className="col pb-5">
            <Link to={`/restaurant/${restaurantId}`} style={{ textDecoration: 'none' }} className="text-dark" >
                <div className="card panda-card-item h-100 shadow p-3 bg-white rounded border-0">
                    <img src={restaurantLogo} className="card-img-top img-fluid" alt="..." style={{ height: "250px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{restaurantName}</h5>
                        <p className="card-text">{restaurantAddress}</p>

                    </div>

                </div>
            </Link>
        </div>


    );
};

export default Restaurant;