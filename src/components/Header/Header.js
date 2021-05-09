import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //console.log('Header', loggedInUser);
    const { value3, value2 } = useContext(UserContext)

    const [cartOpen, setCartOpen] = value2;
    const [cartLength, setCartLength] = value3;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5 pt-3" style={{ height: "11vh" }}>
                <div className="container-fluid">
                    <Link to="/"><h1 className="navbar-brand" style={{ fontWeight: 'bold' }} >Foodies-Network</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon float-end"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-lg-0">

                            <li className="nav-item ">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            {/* <li className="nav-item ">
                                <NavLink className="nav-link" to="/destination/Car">Destination</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="#">Blog</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="#">Contact</NavLink>
                            </li> */}


                            <li className="nav-item login">
                                <Link className="nav-link" style={{ color: "black" }} to="/login">Login</Link>
                            </li>

                            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal" className="cartIcon d-flex flex-wrap  justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faShoppingCart}

                                ></FontAwesomeIcon><sup className="cartLength" >{cartLength}</sup>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;