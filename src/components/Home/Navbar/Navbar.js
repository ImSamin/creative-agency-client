import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  py-4">
            <div className="container">
                <Link class="navbar-brand" href="/">
                    <img style={{ height:'50px'}} src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link mr-4 text-dark" href="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4 text-dark" href="#">Our Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4 text-dark" href="#">Our Team</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4 text-dark" href="#">Contact Us</Link>
                        </li>
                       <Link path="/login">
                            <button className="btn btn-primary btn-brand  px-5">Login</button>
                       </Link>
                        
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;