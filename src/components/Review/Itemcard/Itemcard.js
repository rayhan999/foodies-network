import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Itemcard = (props) => {

    let { name, image, price, id, quantity } = props.item;



    const total = price * quantity;



    return (



        <tbody>
            <tr>
                <th scope="row"><img src={image} alt="" className="img-fluid" style={{ width: '150px', height: '100px' }} /></th>

                <td><h4>{name}</h4></td>
                <td>
                    <h6>{quantity}</h6>
                </td>
                <td><h6>{total}</h6></td>
                <td><button className="btn btn-warning" onClick={() => props.removeProduct(id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button></td>
            </tr>

        </tbody >

    );
};

export default Itemcard;