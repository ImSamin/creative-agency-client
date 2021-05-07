import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListUl } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div>
            <div className="logo px-3 py-3 ">
                <Link to='/'>
                    <img className="img-fluid " style={{ height: '40px' }} src={logo} alt="" />

                </Link>
            </div>

            <div className="side-menu px-4 py-5">
                <ul className="list-unstyled">
                    <li>
                        <Link to='/dashboard/order' className="text-dark">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link> 
                    </li>
                    <li>
                        <Link to='/dashboard/order' className="text-dark">
                            <FontAwesomeIcon icon={faListUl} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/order' className="text-dark">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;