import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../src/images/logos/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleGoogletLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                setLoggedInUser(result.user);
                history.replace(from);
                storeAuthToken()
            }).catch((error) => {
               
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function (error) {
            // Handle error
        });
    }

    return (
        <section className="" >
            <div className="text-center p-4">
                <Link to="/">
                    <img style={{ height: '60px' }} src={logo} alt="" />
                </Link>
            </div>

            <div className="row mt-5 py-5 px-5 style={{height:'100vh'}} d-flex align-items-center">
                <div className="col-md-4">

                </div>
                <div style={{ height: '400px' }} className="col-md-4  border border-secondary d-flex align-items-center justify-content-center">
                    <div className="text-center w-100 px-4">
                        <h3 className="mb-4">Login With</h3>
                        <button onClick={handleGoogletLogin} className=" btn btn  form-control btn-primary">Continue With Google</button>
                        <p className="mt-3">Don't have an accout? <Link to="/login">Create an accout</Link></p>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </section>
    );
};

export default Login;