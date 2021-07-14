import React from 'react';
import { Container } from 'react-bootstrap';
import UpcomingBatch from '../../UpcomingBatch/UpcomingBatch';

const Calendar = () => {
    return (
        <div>
            <Container>
                <div className='py-5'>
                    <h2 className='navbar-color text-center p-3 rounded h1'>
                        UPCOMING BATCH SCHEDULES
                    </h2>
                </div>
                <UpcomingBatch />
            </Container>
        </div>
    );
};

export default Calendar;
