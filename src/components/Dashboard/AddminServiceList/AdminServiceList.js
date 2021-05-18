import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import OrdersTable from './OrdersTable';

const AdminServiceList = () => {
    const name = {name: 'Service List'};
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [ordersList , setOrderList] = useState();

    useEffect(() => {
        fetch(`https://radiant-everglades-28841.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderList(data);
            })
    }, []);
    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header name={name.name}></Header>
            </div>
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>
            <div className="content ">
                <OrdersTable ordersList={ordersList} ></OrdersTable>
            </div>
        </div>
    );
};

export default AdminServiceList;