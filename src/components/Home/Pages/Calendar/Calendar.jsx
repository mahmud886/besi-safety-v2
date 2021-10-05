import React from 'react';
import { Container } from 'react-bootstrap';
import UpcomingBatch from '../../UpcomingBatch/UpcomingBatch';
import Contact from '../Contact/Contact';

const Calendar = () => {
    return (
        <div>
            <Container>
                <UpcomingBatch />
            </Container>
            <Contact />
        </div>
    );
};

export default Calendar;
