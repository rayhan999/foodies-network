import React from 'react';

const Restaurant = (props) => {
    const { restaurantName, restaurantLogo, restaurantAddress, restaurantDeliveryCost, restaurantRating, restaurantMenu } = props.restaurant;
    return (


        <div className="col pb-5">
            <div className="card panda-card-item h-100 shadow p-3 bg-white rounded border-0">
                <img src={restaurantLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{restaurantName}</h5>
                    <p className="card-text">{restaurantAddress}</p>

                </div>
                <div
                    className="card-footer  border-top-0 bg-white panda-card-footer d-flex justify-content-between">
                    <h5 id="price">$ 234</h5>
                    <button type="button" className=" btn d-block  "><i className="fa fa-shopping-cart"></i>&nbsp;Buy
                    Now</button>
                </div>
            </div>
        </div>


    );
};

export default Restaurant;