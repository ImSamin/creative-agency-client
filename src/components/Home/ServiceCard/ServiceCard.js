import React from 'react';

const ServiceCard = ({ serviceData }) => {
    return (
        <div className="col-md-4 mt-3  ">
          <div className={`${serviceData.shadow}  text-center mr-5  px-4 py-4`}>
                <img style={{ height:'100px',  }} src={serviceData.img} alt="" />
                <h4 className="card-title font-poppins text-brand mt-4 ">
                    {serviceData.name}
                </h4>
                <p className="text-secondary ">{serviceData.description}</p>
          </div>
        </div>
    );
};

export default ServiceCard;