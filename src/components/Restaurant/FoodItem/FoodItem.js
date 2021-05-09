import React from 'react';
import '../RestaurantDetails/RestaurantDetails.css';

const FoodItem = (props) => {
    // console.log(props);
    const { name, image, price } = props.item;
    return (
        <div>
            {/* <img src={image} alt="" className="img-fluid" />
            <h1>{name}</h1>
            <button className="btn btn-primary"
                onClick={() => props.handleAddProduct(props.item)}
            >Add to Cart</button> */}
            <div class="card mb-3 itemCard" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={image} alt="..." className="img-fluid itemImage" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Price: {price} BDT</p>
                            <button className="btn btn-primary"
                                onClick={() => props.handleAddProduct(props.item)}
                            >Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;