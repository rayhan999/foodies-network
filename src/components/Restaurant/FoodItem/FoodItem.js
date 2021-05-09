import React from 'react';
import '../RestaurantDetails/RestaurantDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FoodItem = (props) => {
    const { name, image, price } = props.item;
    return (
        <div>
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
                            ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>&nbsp;Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;