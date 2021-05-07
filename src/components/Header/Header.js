import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../../App';
// import './Header.css';

const Header = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //console.log('Header', loggedInUser);
    const { value1, value2 } = useContext(UserContext)

    const [cartOpen, setCartOpen] = value2;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mb-5 pt-3">
                <div className="container-fluid">
                    <h1 class="navbar-brand" style={{ fontWeight: 'bold' }} >Foodies-Network</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon float-end"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto  mb-lg-0">
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active" to="/destination/Car">Destination</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active" to="#">Blog</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link active" to="#">Contact</Link>
                            </li>
                            {/* {loggedInUser.isSignedIn ?
                                <li class="nav-item login" style={{ fontWeight: 'bold' }} >
                                    <span class="nav-link active userName" style={{ cursor: 'default', fontWeight: 'bold', color: 'white' }} onClick={() => setLoggedInUser({})}>{loggedInUser.name}</span>
                                </li>
                                :

                                <li class="nav-item login">
                                    <Link class="nav-link active " style={{ color: 'white' }} to="/login">Login</Link>
                                </li>
                            } */}
                            <li className="nav-item">
                                <FontAwesomeIcon icon={faShoppingCart} onClick={() => setCartOpen(!cartOpen)}></FontAwesomeIcon>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;