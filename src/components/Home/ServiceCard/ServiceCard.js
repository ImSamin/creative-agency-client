import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceData }) => {
    return (
        <div className="col-md-4 mt-3  ">
          <Link to={`/dashboard/add-order/${serviceData._id}`}>
                <div className={`${serviceData.shadow}  text-center mr-5  px-4 py-4`}>
                    <img style={{ height: '100px', }} src={`data:image/png;base64,${serviceData.image.img}`} alt="" />
                    <h4 className="card-title font-poppins text-brand mt-4 ">
                        {serviceData.title}
                    </h4>
                    <p className="text-secondary ">{serviceData.description}</p>
                </div>
          </Link>
        </div>
    );
};

export default ServiceCard;