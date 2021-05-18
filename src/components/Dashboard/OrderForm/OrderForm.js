import React, { useContext, useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { userContext } from '../../../App';


const OrderForm = () => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();
    const [selectedService, setSelectedService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    // console.log(selectedService.title);

    const onSubmit = data => {
        if (selectedService) {
            data.image = selectedService.image;
        } 
        data.date = new Date();
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order Placed Successfully');
                }
            })
    };

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setSelectedService(data.find((item) => item._id === id));
            })
    }, []);
    return (


        <div className="  col-md-5 py-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group ">
                    <input className="form-control" {...register("name")} required placeholder="Your Name/Company's Name" defaultValue={loggedInUser.displayName} />
                </div>
                <div className="form-group">
                    <input className="form-control"  {...register("email")} required placeholder="Your Email Address" type="email" defaultValue={loggedInUser.email} />
                </div>
                <div className="form-group">

                    <input className="form-control"  {...register("title", { required: true })} required defaultValue={selectedService ? selectedService.title : "Service Name"} />
                    {/* {errors.title && "Title name is required"} */}
                </div>
                <div className="form-group">
                    <textarea className="form-control" {...register("details", { required: true })} required cols="12" rows="8" defaultValue={selectedService ? selectedService.description : "Project Details"} />
                    {/* {errors.description && "description is required"}  */}
                </div>

                <div className="from-group row">
                    <div className="col-md-6 mb-3">
                        <input className="form-control"  {...register("price")} required type="number" placeholder="Price" />
                    </div>
                    <div className="col-md-6">
                        <input type="file" name="file"  {...register("file")} className="  " />
                    </div>
                </div>
                <button type="submit" className="btn btn-brand px-5 mt-3 text-white">SEND</button>

            </form>
        </div>
    );
};

export default OrderForm;