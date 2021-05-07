import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ReviewForm from './ReviewForm';

const AddReview = () => {
    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header></Header>
            </div>
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>
            <div className="content ">
                <ReviewForm></ReviewForm>
            </div>

        </div>
    );
};

export default AddReview;