import React from 'react';
import './Login.css'
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <CDBContainer className="d-flex align-items-center justify-content-center pb-5 pt-5 loginContainer">
            <CDBCard className="loginCard shadow">
                <CDBCardBody className="mx-4">
                    <div className="text-center mt-4 mb-2">
                        <p className="h4"> Login </p>
                    </div>

                    <CDBInput material label="E-mail" type="email" icon="user" />
                    <CDBInput material label="Password" type="password" icon="key" />

                    <div className="d-flex flex-wrap justify-content-center align-items-center">

                        <CDBInput type="checkbox" />
                        <p className="m-0">Remember me</p>
                        <Link to="#" className="pl-5">Forgot Password ?</Link>
                    </div>
                    <CDBBtn

                        className="btn-block my-3 mx-0 loginBtn" >
                        Login
            </CDBBtn>
                    <p className="text-center">Not a member? <Link className="d-inline p-0" to="#">Register</Link></p>
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