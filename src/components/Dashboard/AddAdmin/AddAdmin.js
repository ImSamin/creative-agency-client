import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('added successfully')
            }
        })
    }


    return (
        <div className="container-fluid order-container">
            <div className="header bg-White ">
                <Header></Header>
            </div>
            <div className="sidebar bg-White">
                <Sidebar></Sidebar>
            </div>
            <div className="content container-fluid px-5 py-5">
                <div className="row py-5 bg-light h-50 rounded-lg ">
                    <div className="col-md-9">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="ml-3" htmlFor="">Email</label>
                            <div className="mr-2 col-md-8 d-flex">
                                <input {...register("email", { required: true })} className="form-control" type="email" placeholder="jon@gmail.com" />
                                <div className=" ml-2">
                                    <button className=" btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AddAdmin;