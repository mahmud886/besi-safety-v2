import React from 'react';

const ElearnWorkHeight = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className=' text-center'>
                    <h2>Work At Height</h2>
                    <h5>Occupational Health & Safety Management Systems</h5>
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
                                <button className='btn btn-main btn-md'>
                                    Learner Agreement
                                </button>
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
                            ISO 45001 is the world’s International standard for
                            occupational health & safety, issued to protect
                            employees and visitors from work related accidents
                            and diseases. ISO 45001 certification is designed to
                            mitigate factors that can cause employees and
                            businesses irreparable harm.
                        </p>
                    </div>

                    <div className='pt-2'>
                        <h4>Aim or Purpose(why this course)</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • To improve safety and health of employees and
                                other stakeholders.
                            </li>
                            <li className='list-group-item'>
                                • To benefit a company and its’ overall
                                businesses.
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
                        <h4>Benefits of ISO 14001:2015</h4>
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
                                • • An ISO 45001:2018 from BESI Private Limited
                                will help any organization to improve its’
                                business
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
                                        <h5>Module 1:</h5>
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
                                            <h5>
                                                Fall Prevention ( Scaffolding ,
                                                Ladders)
                                            </h5>
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
                                        <h5>Module 2:</h5>
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
                                        <h5>Module 3:</h5>
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
                                        <h5>Module 4:</h5>
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
                                        <h5>Module 5: </h5>
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
                                        <h5>Module 6:</h5>
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
                                        <h5>Certification:</h5>
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
        </div>
    );
};

export default ElearnWorkHeight;
