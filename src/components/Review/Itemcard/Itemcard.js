import React from 'react';

const Itemcard = (props) => {
    const { name, image, price, id } = props.item;
    return (
        <div>
            <h1>{name}</h1>
            <button className="btn btn-primary" onClick={() => props.removeProduct(id)}>Remove</button>
        </div>
    );
};

export default Itemcard;