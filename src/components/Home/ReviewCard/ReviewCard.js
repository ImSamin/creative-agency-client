import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="border px-3 py-2 mb-4">
                <div className="d-flex  align-items-center rounded-circle">
                    <img className="rounded-circle" style={{height:'64px'}} src={review.img} alt=""/>
                   <div className="ml-3 ">
                        <h5 className="mt-3">{review.name}</h5>
                        <p className="">{review.designation}</p>
                   </div>
                </div>
                <small className="text-secondary">
                    {review.description}
                </small>
            </div>
        </div>
    );
};

export default ReviewCard;