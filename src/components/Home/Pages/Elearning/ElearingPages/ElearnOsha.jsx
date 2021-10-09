import React from 'react';

const ElearnOsha = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className=' text-center'>
                    <h2>OSHA USA</h2>
                    <h5>Occupational safety and Health Administration</h5>
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
                            Occupational safety and Health Administration is a
                            certificate for health & safety professionals. It
                            has two courses, OSHA Construction Safety & OSHA
                            Industrial Safety. Each of these courses are
                            comprised of two variations - OSHA 10 Hours and OSHA
                            30 Hours. These courses train students to avoid
                            hazards in workplace
                        </p>
                    </div>

                    <div className='pt-2'>
                        <h4>Who can attend?</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • OSHA 10 Hours: this course is for the entry
                                level workers who work in construction and in
                                industries (Basic level)
                            </li>
                            <li className='list-group-item'>
                                • OSHA 30 Hours: this courses is for the
                                supervisors and higher level workers at the
                                construction site (Advanced Level)
                            </li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Course features</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                • Audio Narration
                            </li>
                            <li className='list-group-item'>
                                • Industry specific courses in English
                            </li>
                            <li className='list-group-item'>
                                • Real life case studies
                            </li>
                            <li className='list-group-item'>
                                • Course materials and guidelines
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
                                • 10 Hours & 30 Hours
                            </li>
                            <li className='list-group-item'>• • Online</li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <h4>Course Fee:</h4>
                        <h6>• 20,000 BDT (approx. USD 240)</h6>
                        <h6>• 30 Hours – 20,000 BDT (approx. USD 240)</h6>
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

export default ElearnOsha;
