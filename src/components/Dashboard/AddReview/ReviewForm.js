import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';

const ReviewForm = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const onSubmit = data => {
        data.img = loggedInUser.photoURL;
        fetch('https://radiant-everglades-28841.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            alert('review successfully added')
        })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row  mx-3  mt-5 ">
            <div className="col-md-5">
                <div className="form-group">
                    <input {...register("name")} placeholder="Your Name" type="text" className="form-control" required />
                </div>
                <div className="form-group">
                    <input {...register("designation")} placeholder="Designation, Company's Name" type="text" className="form-control" required />
                </div>
                <div className="form-group">
                    <textarea {...register("description")} placeholder="Write about your experience" required type="text" className="form-control" cols="4" rows="6" />
                </div>
            </div>
            <div className="col-md-6 ">

            </div>

            <div className="form-group px-3 ">
                <button type="submit" className="btn btn-brand text-white">
                    Submit
               </button>
            </div>
        </form>
    );
};

export default ReviewForm;