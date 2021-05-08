import React from 'react';

const FoodItem = (props) => {
    // console.log(props);
    const { name, image, price } = props.item;
    return (
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <button className="btn btn-primary"
                onClick={() => props.handleAddProduct(props.item)}
            >Add to Cart</button>
        </div>
    );
};

export default FoodItem;