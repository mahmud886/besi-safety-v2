import React from 'react';
import { Container } from 'react-bootstrap';
import UpcomingBatch from '../../UpcomingBatch/UpcomingBatch';

const Calendar = () => {
    return (
        <div>
            <Container>
                <UpcomingBatch />
            </Container>
        </div>
    );
};

export default Calendar;
