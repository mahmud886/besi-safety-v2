import React from 'react';
import Banner from './../Banner/Banner';
import Service from './../Service/Service';
import Courseform from './../Courseform/Courseform';
import SafetyCourses from './../SafetyCourses/SafetyCourses';
import Counter from './../Counter/Counter';
import UpcomingBatch from './../UpcomingBatch/UpcomingBatch';
import Testimonial from '../../Testimonial/Testimonial';

const Header = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Courseform />
            <SafetyCourses />
            <Counter />
            <UpcomingBatch />
            <Testimonial />
        </div>
    );
};

export default Header;
