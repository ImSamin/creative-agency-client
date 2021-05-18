import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import './Header.css';
const Header = ({name}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className=" ds-header d-flex justify-content-between py-4 mx-5">
            <h5> {name} </h5>
            <div className="d-flex align-items-center">
                <img className="rounded-circle mr-2 " style={{ height: '30px' }} src={loggedInUser.photoURL} alt="" />
                <h6>{loggedInUser.displayName}</h6>
            </div>
        </div>
    );
};

export default Header;