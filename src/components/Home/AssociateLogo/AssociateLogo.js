import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './AssociateLogo.css'


const AssociateLogo = () => {
    return (
        <div className="container mt-3">
            <div className="row d-flex justify-content-center ">
                <div className="col-md-12 offset-md-2 associate-logo">
                    <img src={slack} alt="" className="mr-5"/>
                    <img src={google} alt="" className="mr-5"/>
                    <img src={uber} alt="" className="mr-5"/>
                    <img src={netflix} alt="" className="mr-5"/>
                    <img src={airbnb} alt="" className=""/>
                </div>
            </div>
        </div>
    );
};

export default AssociateLogo;