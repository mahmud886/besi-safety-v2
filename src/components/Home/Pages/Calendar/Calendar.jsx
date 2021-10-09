import React from 'react';
import { Container } from 'react-bootstrap';
import UpcomingBatch from '../../UpcomingBatch/UpcomingBatch';
import Contact from '../Contact/Contact';

const Calendar = () => {
    return (
        <div>
            <div className='py-5 bg-light shadow-sm'>
                <h2 className=' text-center p-3 rounded h1'>Calendar Page</h2>
                <p className='text-center'>calendar</p>
            </div>
            <Container>
                <UpcomingBatch />
            </Container>
            <Contact />
        </div>
    );
};

export default Calendar;
