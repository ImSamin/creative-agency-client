import React, { useEffect, useState } from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {

    const [review, setReview] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
    },[]);
    // const feedback = [
    //     {
    //         name: 'Nash Patrik',
    //         position: 'CEO, Manpol',
    //         img: client1,
    //         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum ab quod tenetur quasi nulla.'
    //     },
    //     {
    //         name: 'Nash Patrik',
    //         position: 'CEO, Manpol',
    //         img: client2,
    //         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum ab quod tenetur quasi nulla.'
    //     },
    //     {
    //         name: 'Nash Patrik',
    //         position: 'CEO, Manpol',
    //         img: client3,
    //         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum ab quod tenetur quasi nulla.'
    //     }
    // ]
    return (
        <section className="section container">
            <h2 className="text-center text-brand ">
                Clients <span className="text-green">Feedback</span>
            </h2>

            <div style={{ marginTop:'100px'}} className="row">
                {
                    review && review.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;