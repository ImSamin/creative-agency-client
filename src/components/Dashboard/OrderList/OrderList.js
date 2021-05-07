import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import OrdersCard from './OrdersCard';

const OrderList = () => {
    const [orderList, setOrderList] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
    },[])
    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header></Header>
            </div>
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>
            <div className="content container-fluid">
                <div className="row  mt-5 px-3">
                    {
                        orderList && orderList.map(order => <OrdersCard orderList={order} key={order._id}></OrdersCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default OrderList;