import React from 'react';
import AssociateLogo from '../AssociateLogo/AssociateLogo';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AssociateLogo></AssociateLogo>
            <Services></Services>
            <Slider></Slider>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;