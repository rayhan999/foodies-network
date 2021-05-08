import React from 'react';
import './Login.css'
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";


const Login = () => {
    return (
        <CDBContainer className="d-flex align-items-center justify-content-center pb-5 loginContainer">
            <CDBCard className="loginCard shadow">
                <CDBCardBody className="mx-4">
                    <div className="text-center mt-4 mb-2">
                        <p className="h4"> Sign in </p>
                    </div>
                    {/* <CDBInput material hint="E-mail" type="email" /> */}
                    <CDBInput material label="E-mail" type="email" icon="user" />
                    <CDBInput material label="Password" type="password" icon="key" />

                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                        {/* <CDBInput type="Checkbox" /> */}
                        <CDBInput type="checkbox" />
                        <p className="m-0">Remember me</p>
                        <CDBLink to="#">Forgot Password ?</CDBLink>
                    </div>
                    <CDBBtn

                        className="btn-block my-3 mx-0 loginBtn" >
                        Login
            </CDBBtn>
                    <p className="text-center">Not a member? <CDBLink className="d-inline p-0" to="#">Register</CDBLink></p>
                    <p className="text-center"> or sign in with</p>
                    <div className="row my-3 d-flex justify-content-center">
                        <CDBBtn className="socialBtn">
                            {/* <CDBIcon fab icon="facebook-f" /> */}
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </CDBBtn>
                        <CDBBtn className="socialBtn">
                            {/* <CDBIcon fab icon="twitter" /> */}
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </CDBBtn>
                        <CDBBtn className="socialBtn">
                            {/* <CDBIcon fab icon="google-plus-g" /> */}
                            <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                        </CDBBtn>
                    </div>
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>

    );
};

export default Login;