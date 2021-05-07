import React, { useEffect, useState } from 'react';
import webDesign from '../../../images/icons/service1.png'
import GraphicDesign from '../../../images/icons/service2.png'
import webDevelopment from '../../../images/icons/service3.png'
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[]);
    // const cardData =[
    //     {
    //         img: webDesign,
    //         name:'Web & Mobile design',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas natus eaque enim neque.'
    //     },
    //     {
    //         img: GraphicDesign,
    //         name: 'Graphic Design',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas natus eaque enim neque.',
    //         shadow: 'shadow'
    //     },
    //     {
    //         img: webDevelopment,
    //         name: 'Web Development',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas natus eaque enim neque.'
    //     }
    // ]
    return (
        <section  className="section ">
            <h2 style={{}} className="text-center font-poppins mb-5">Provide awesome <span className="text-green">services</span></h2>

            <div style={{marginTop: '100px'}} className="d-flex justify-content-center ml-5">
                <div className="row px-5  ">
                    {
                        services.map(service => <ServiceCard serviceData={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;