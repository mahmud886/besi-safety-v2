import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './UpcomingBatch.css';
import UpcomingCourse from './UpcomingCourse';
import { apiEndpoint } from '../../../App';

// const courseData = [
//     {
//         month: 'June',
//         date: '35',
//         title: 'Nebosh GC2 - Old Syllabus',
//         class_type: 'Classroom /External',
//         start_time: 'ClassroomPaper based exam',
//         location: 'Location: Puducherry',
//     },
//     {
//         month: 'June',
//         date: '31',
//         title: 'Nebosh PSM - Process Safety Management',
//         class_type: 'Classroom',
//         start_time: 'ClassroomPaper based exam',
//         location: 'Location: Puducherry',
//     },
//     {
//         month: 'June',
//         date: '33',
//         title: 'Nebosh IG - Open Book Examination',
//         class_type: 'Classroom /Online',
//         start_time: 'ClassroomPaper based exam',
//         location: 'Location: Puducherry',
//     },
// ];

const UpcomingBatch = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`${apiEndpoint}/booknows`)
            .then((res) => res.json())
            .then((courses) => {
                setCourses(courses);
            });
    }, []);

    return (
        <div className=''>
            <div className='container pt-3 py-5'>
                <div className='py-5 text-center'>
                    <h1>UPCOMING BATCH SCHEDULES</h1>
                </div>
                {courses.map((course, index) => (
                    <UpcomingCourse course={course} key={index} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingBatch;
