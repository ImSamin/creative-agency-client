import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListUl, faClipboardList, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css';
import { userContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://radiant-everglades-28841.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            })
    }, [])
    return (
        <div>
            <div className="logo px-3 py-3 ">
                <Link to='/'>
                    <img className="img-fluid " style={{ height: '40px' }} src={logo} alt="" />

                </Link>
            </div>

            <div className="side-menu pl-4 py-5">
                <ul className="list-unstyled">    
                            <div>
                                <li>
                                    <Link to='/dashboard/add-order' className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/order-list' className="text-dark">
                                        <FontAwesomeIcon icon={faListUl} /> <span>Service List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/add-review' className="text-dark">
                                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                    </Link>
                                </li>
                            </div>

                    {
                        isAdmin && <div>
                            <li>
                                <Link to='/dashboard/admin-service-list' className="text-dark">
                                    <FontAwesomeIcon icon={faClipboardList} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/add-service' className="text-dark">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/add-admin' className="text-dark">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                                </Link>
                            </li>
                        </div>
                    }
                    
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;