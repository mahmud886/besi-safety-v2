import React from 'react';
import LearnerAgreement from './Modals/LearnerAgreement';

const ElearnIosh = () => {
    return (
        <>
            <div className='container py-5'>
                <div className=' text-center'>
                    <h2>ISOH MS(Managing Safely)</h2>
                    <h5>
                        Institute of Occupational Safety & Health is a global
                        organization for health & safety professionals
                    </h5>
                </div>
                <div className='container py-5'>
                    <div className='bg-light rounded'>
                        <div className='row text-center py-4'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <div className=''>
                                    <p>
                                        <span>Current Status</span>
                                    </p>
                                    <button className='btn btn-main'>
                                        NOT ENROLLED
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <div className=''>
                                    <p>
                                        <span>Price</span>
                                    </p>
                                    <button className='btn btn-main'>
                                        BDT 20000
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <div className=''>
                                    <p>
                                        <span>Get Started</span>
                                    </p>
                                    <button className='btn btn-main'>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Content */}
                    <div className='pt-5'>
                        <div className='row text-center'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <LearnerAgreement />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <button className='btn btn-main btn-main btn-md'>
                                    Session Plan
                                </button>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <button className='btn btn-main btn-main btn-md'>
                                    Joining Instructions
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
                {/* Course Description */}

                <div className='container py-3'>
                    <div className=''>
                        <h4>Course Descriptions</h4>
                        <p>
                            IOSH MS is a UK based certification that has a high
                            demanding base in Bangladesh. IOSH helps
                            professionals to assess occupational hazards, and
                            maintain appropriate health and safety
                        </p>
                    </div>

                    <div className='pt-2'>
                        <h4>Aim or Purpose(why this course)</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • To make people understand about the importance
                                of safety at work place.
                            </li>
                            <li className='list-group-item'>
                                • To encourage employees for maintaining health
                                safety while working.
                            </li>
                            <li className='list-group-item'>
                                • To educate managers and supervisors to monitor
                                and control risk.
                            </li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Who can attend?</h4>
                        <p>
                            As this course is about safety issues, anyone from
                            any background and organization can attend this
                            course.
                        </p>
                    </div>
                    <div className='pt-2'>
                        <h4>Benefits of ISOH MS</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • Improve hazard identification and risk
                                assessment
                            </li>
                            <li className='list-group-item'>
                                • Reduces overall cost of incidents at the
                                workplace and the number of premiums claimed
                            </li>
                            <li className='list-group-item'>
                                • Enhances the involvement of leadership and
                                participation from workers.
                            </li>
                            <li className='list-group-item'>
                                • Enhances organizations’ performances.
                            </li>
                            <li className='list-group-item'>
                                • This course will lead towards fewer workplace
                                injuries and illnesses which will eventually
                                result into more productivity
                            </li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Why BESI?</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • • We are known as the global leader in
                                certification, working with clients in virtually
                                any sector
                            </li>
                            <li className='list-group-item'>
                                • • An ISOH MS from BESI Private Limited will
                                help any organization to improve its’ business
                            </li>
                            <li className='list-group-item'>
                                • • BESI has well trained and highly experienced
                                trainer panel
                            </li>
                            <li className='list-group-item'>
                                • • BESI provides easy and spontaneous course
                                materials.
                            </li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Course Requirements</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • Mobile / Laptop
                            </li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Course Duration</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • • 5 days course( additional classes if needed)
                            </li>
                            <li className='list-group-item'>• • Online</li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Course Fee: 20,000 BDT (approx. USD 240)</h4>
                    </div>

                    {/* Course Module */}
                    <div className='pt-2'>
                        <h4>Course Module</h4>
                        {/* Accourdion */}

                        <div className='accordion' id='accordionExample'>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingOne'>
                                    <button
                                        className='accordion-button'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseOne'
                                        aria-expanded='true'
                                        aria-controls='collapseOne'>
                                        <h5>
                                            Module 1: Introducing managing
                                            safely
                                        </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseOne'
                                    className='accordion-collapse collapse show'
                                    aria-labelledby='headingOne'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingTwo'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseTwo'
                                        aria-expanded='false'
                                        aria-controls='collapseTwo'>
                                        <h5>Module 2: Assessing risks</h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseTwo'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingTwo'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingThree'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseThree'
                                        aria-expanded='false'
                                        aria-controls='collapseThree'>
                                        <h5>Module 3: Controlling risks</h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseThree'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingThree'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingFour'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseFour'
                                        aria-expanded='false'
                                        aria-controls='collapseThree'>
                                        <h5>
                                            Module 4: Understanding
                                            responsibilities
                                        </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseFour'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingFour'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingFive'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseFive'
                                        aria-expanded='false'
                                        aria-controls='collapseFive'>
                                        <h5>Module 5: Understanding hazards</h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseFive'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingFive'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingSix'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseSix'
                                        aria-expanded='false'
                                        aria-controls='collapseSix'>
                                        <h5>
                                            Module 6: Investigating incidents
                                        </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseSix'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingSix'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingSeven'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseSeven'
                                        aria-expanded='false'
                                        aria-controls='collapseSeven'>
                                        <h5>Module 7: </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseSeven'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingSeven'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/Q7Ef4e4U1yc'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Assessment</h6>
                                            <li className='list-group-item'>
                                                • MCQ
                                            </li>
                                            <li className='list-group-item'>
                                                • Risk assessment test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingEight'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseEight'
                                        aria-expanded='false'
                                        aria-controls='collapseEight'>
                                        <h5>
                                            Certification: Measuring Performance
                                        </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseEight'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingEight'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                Certificate from UK
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ElearnIosh;
