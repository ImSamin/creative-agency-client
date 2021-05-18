import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ServiceForm from './ServiceForm';


const AddService = () => {
    const name = { name: 'Add Service' };
    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header name={name.name}></Header>
            </div>
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>
            <div className="content ">
               <ServiceForm></ServiceForm>
            </div>

        </div>
    );
};

export default AddService;