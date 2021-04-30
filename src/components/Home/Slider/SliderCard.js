import React from 'react';
import Carousel from "react-elastic-carousel";
import CoursleCard from './CoursleCard';
import cOne from '../../../images/carousel-1.png';
import cTwo from '../../../images/carousel-2.png';
import cThree from '../../../images/carousel-1.png';
import cFour from '../../../images/carousel-4.png';
import cFive from '../../../images/carousel-5.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
];

const SliderCard = () => {
   
    return (

        <div className="carousel-wrapper py-5  ">
            <Carousel breakPoints={breakPoints}>
                <CoursleCard ><img className="img-fluid" style={{ borderRadius: "10px" }} src={cOne} alt="" /></CoursleCard>
                <CoursleCard><img className="img-fluid" style={{ borderRadius: "10px" }} src={cTwo} alt="" /></CoursleCard>
                <CoursleCard><img className="img-fluid" style={{ borderRadius: "10px" }} src={cThree} alt="" /></CoursleCard>
                <CoursleCard><img className="img-fluid" style={{ borderRadius: "10px" }} src={cFive} alt="" /></CoursleCard>
                <CoursleCard><img className="img-fluid" style={{ borderRadius: "10px" }} src={cFour} alt="" /></CoursleCard>
                <CoursleCard ><img className="img-fluid" style={{ borderRadius: "10px" }} src={cOne} alt="" /></CoursleCard>
                <CoursleCard><img className="img-fluid" style={{ borderRadius: "10px" }} src={cTwo} alt="" /></CoursleCard>
            </Carousel>
        </div>

    );
};

export default SliderCard;