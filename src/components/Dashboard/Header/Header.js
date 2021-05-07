import React, { useState } from 'react';
import './Header.css';
const Header = () => {
    const [service, setService] = useState()
    return (
        <div className=" ds-header d-flex justify-content-between py-4 mx-5">
            <h5> Order </h5>
            <h6>User Name</h6>
        </div>
    );
};

export default Header;