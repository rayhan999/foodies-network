import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <nav className="navbar navbar-expand-lg navbar-light  mb-5 pt-3 cyan" style={{ height: "11vh" }}>
                <div className="container-fluid">
                    <h1 className="navbar-brand" style={{ fontWeight: 'bold' }} >Foodies-Network</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon float-end"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/destination/Car">Destination</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="#">Blog</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="#">Contact</NavLink>
                            </li>
                            {/* {loggedInUser.isSignedIn ?
                                <li className="nav-item login" style={{ fontWeight: 'bold' }} >
                                    <span className="nav-link active userName" style={{ cursor: 'default', fontWeight: 'bold', color: 'white' }} onClick={() => setLoggedInUser({})}>{loggedInUser.name}</span>
                                </li>
                                :

                                <li className="nav-item login">
                                    <Link className="nav-link active " style={{ color: 'white' }} to="/login">Login</Link>
                                </li>
                            } */}
                            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FontAwesomeIcon icon={faShoppingCart} className="nav-link "
                                // onClick={() => setCartOpen(!cartOpen)} 
                                ></FontAwesomeIcon>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {/* <nav className="mb-4 navbar navbar-expand-lg navbar-dark cyan">
                <a className="navbar-brand font-bold" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa fa-envelope"></i> Contact <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-gear"></i> Settings</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i> Profile </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                                <a className="dropdown-item" href="#">My account</a>
                                <a className="dropdown-item" href="#">Log out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </div>
    );
};

export default Header;