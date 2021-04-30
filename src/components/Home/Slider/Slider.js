import React from 'react';
import SliderCard from './SliderCard';

const Slider = () => {
    return (
        <section style={{ background: '#111430'}} className="section overflow-hidden py-5">
            <h2 className="text-center text-white mt-5">Here are some of <span className="text-green">our works</span> </h2>

           
                <SliderCard></SliderCard>
           
        </section>
    );
};

export default Slider;