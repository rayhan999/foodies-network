import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Itemcard = (props) => {
    const { name, image, price, id, quantity } = props.item;
    // console.log(props);
    const total = price * quantity
    return (



        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{image}</td>
                <td>{name}</td>
                <td><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>{quantity}<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></td>
                <td>{total}</td>
                <td><button className="btn btn-warning" onClick={() => props.removeProduct(id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button></td>
            </tr>

        </tbody>

    );
};

export default Itemcard;