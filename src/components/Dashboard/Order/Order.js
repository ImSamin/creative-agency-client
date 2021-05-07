import React from 'react';
import Header from '../Header/Header';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css'
const Order = () => {
    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header></Header>
            </div> 
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>       
            <div className="content ">
                <OrderForm></OrderForm>
            </div>    
            
        </div>
    );
};

export default Order;