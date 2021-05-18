import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ServiceForm = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState('');

    const { register, handleSubmit } = useForm();

    console.log(file)

    const handleBlur = e => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const onSubmit = () => {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);


        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('service added successfully')
                console.log(data)
            })
            .catch(error => {

                console.error(error)
            })
    }
    return (
        <div className="mt-5 mx-3 bg-white rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="row px-3 py-4 ">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" required name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea onBlur={handleBlur} required type="text" className="form-control" cols="4" rows="6" name="description" />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <label htmlFor="">Icon</label>
                    <br />
                    <input onChange={handleFileChange} type="file" required />
                </div>

                <div className="form-group px-3 ">
                    <button type="submit" className="btn btn-brand text-white">
                        Submit
               </button>
                </div>

            </form>
        </div>
    );
};

export default ServiceForm;