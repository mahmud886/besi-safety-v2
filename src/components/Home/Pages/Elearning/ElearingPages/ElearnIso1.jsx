import React from 'react';
import LearnerAgreement from './Modals/LearnerAgreement';

const ElearnIso1 = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className=' text-center'>
                    <h2>ISO 45001:2018</h2>
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
                                        <h5>Module 1: Introduction</h5>
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
                                                src='https://www.youtube.com/embed/ppR03lMQlZQ'
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
                                                • Introduction test
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
                                        <h5>Module 2: Differency</h5>
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
                                                src='https://www.youtube.com/embed/L2etkMyZ9pE'
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
                                                • Differency test
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
                                        <h5>Module 3: Structure</h5>
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
                                                src='https://www.youtube.com/embed/apT2FZuFVU0'
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
                                                • Structure test
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
                                        <h5>Module 4: Clause-4</h5>
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
                                                src='https://www.youtube.com/embed/sW2GSDxVNhs'
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
                                                • Clause-4 test
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
                                        <h5>Module 5: Clause-5 </h5>
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
                                                src='https://www.youtube.com/embed/NNxlq0c_woU'
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
                                                • Clause-5 test
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
                                        <h5>Module 6: Clause-6</h5>
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
                                                src='https://www.youtube.com/embed/jB7KnRLTPZ0'
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
                                                • Clause-6 test
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
                                        <h5>Module 7: Clause-7 </h5>
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
                                                src='https://www.youtube.com/embed/mS3g_sXtQAQ'
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
                                                • Clause-7 test
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
                                        <h5>Module 8: Clause-8 </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseEight'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingEight'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/YP6vy0gpC7I'
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
                                                • Clause-8 Test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingNine'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseNine'
                                        aria-expanded='false'
                                        aria-controls='collapseNine'>
                                        <h5>Module 9: Clause-9 </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseNine'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingNine'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/GQAkOm9RkCY'
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
                                                • Clause-9 Test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingTen'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseTen'
                                        aria-expanded='false'
                                        aria-controls='collapseTen'>
                                        <h5>Module 10: Clause-10</h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseTen'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingTen'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/3asWbHMCJA4'
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
                                                • Clause-10 Test
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingEleven'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseEleven'
                                        aria-expanded='false'
                                        aria-controls='collapseEleven'>
                                        <h5>
                                            Module 11: Certification Process
                                        </h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseEleven'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingEleven'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <div className='text-center'>
                                            <iframe
                                                width='760'
                                                height='315'
                                                src='https://www.youtube.com/embed/3Z_FU7Dmx5s'
                                                title='YouTube video player'
                                                frameborder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowfullscreen></iframe>
                                        </div>
                                        <ul className='list-group'>
                                            <h6>Certification Process</h6>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='accordion-item'>
                                <h2
                                    className='accordion-header'
                                    id='headingTwelve'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseTwelve'
                                        aria-expanded='false'
                                        aria-controls='collapseTwelve'>
                                        <h5>Module 12: Exam</h5>
                                    </button>
                                </h2>
                                <div
                                    id='collapseTwelve'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingTwelve'
                                    data-bs-parent='#accordionExample'>
                                    <div className='accordion-body'>
                                        <ul className='list-group'>
                                            <h6>Exam</h6>
                                            <li className='list-group-item'>
                                                • Google Docs link (
                                                https://docs.google.com/forms/d/1G1MpSUT5Hz-xN2hre7EuJF5GRjLeR0w-ZO8DQXyUXY0/viewform?edit_requested=true
                                                )
                                            </li>
                                            <li className='list-group-item'>
                                                • MCQ
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

export default ElearnIso1;
