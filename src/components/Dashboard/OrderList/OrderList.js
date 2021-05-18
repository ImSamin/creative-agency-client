import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import OrdersCard from './OrdersCard';

const OrderList = () => {
    const [orderList, setOrderList] = useState();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const name = { name: 'Your Orders' };

    useEffect(() => {
        fetch(`https://radiant-everglades-28841.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
    },[])
    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header name={name.name}></Header>
            </div>
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>
            <div className="content container-fluid">
                <div className="row  mt-4 px-2">
                    {
                        orderList && orderList.map(order => <OrdersCard orderList={order} key={order._id}></OrdersCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default OrderList;