import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../../../App';

const Itemcard = (props) => {
    const { value1, value3 } = useContext(UserContext)
    const [cart, setCart] = value1;
    const [cartLength, setCartLength] = value3;
    let { name, image, price, id, quantity } = props.item;
    const [qty, setQty] = useState(quantity);
    const [q, setQ] = useState();

    const [item, setItem] = useState(
        {
            name: name,
            price: price,
            image: image,
            id: id,
            quantity: qty
        }
    )
    useEffect(() => {
        console.log(qty);


    }, [qty])

    // console.log(item);
    const newCart = cart.filter(pd => pd.id !== item.id);
    // // setCart(newCart);
    console.log(newCart);
    // setCartLength(newCart.length);
    const total = price * quantity;

    const itemMinus = () => {
        const newquantity = qty - 1;
        setQty(newquantity);
    }
    const itemPlus = () => {
        // console.log(qty);
        const newquantity = qty + 1;

        setQty(newquantity);
        const newItem = { ...item };
        newItem[quantity] = qty;
        setItem(newItem);
        console.log(item);
        // let newQty = item.quantity + 1;
        // const newItem = {
        //     name: name,
        //     price: price,
        //     image: image,
        //     id: id,
        //     quantity: newquantity
        // };
        // setItem(newItem);
        // console.log(item);
        // console.log(cart.quantity);
    }
    const handleChange = (e) => {
        console.log('h');
        console.log(e.target.value);
    }
    return (



        <tbody>
            <tr>
                <th scope="row"><img src={image} alt="" className="img-fluid" style={{ width: '150px', height: '100px' }} /></th>

                <td><h4>{name}</h4></td>
                <td>
                    {/* <FontAwesomeIcon icon={faMinus} onClick={itemMinus}></FontAwesomeIcon> */}
                    {/* <span onChange={handleChange}>{qty}</span> */}


                    <input name="quantity" value={quantity} onChange={handleChange} />



                    {/* <FontAwesomeIcon icon={faPlus} onClick={itemPlus}></FontAwesomeIcon> */}
                </td>
                <td>{total}</td>
                <td><button className="btn btn-warning" onClick={() => props.removeProduct(id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button></td>
            </tr>

        </tbody >

    );
};

export default Itemcard;