import React from 'react';
import { Link } from 'react-router-dom';

const Iso1 = () => {
    return (
        <div>
            <div className='py-5 bg-light shadow-sm'>
                <h2 className='text-center p-3 rounded h1'>
                    ISO <br />
                    <h5>ISO 45001:2018</h5>
                    <h6>Occupational Health & Safety Management Systems</h6>
                </h2>
                <p className='text-center'>courses/iso1</p>
            </div>
            <div className='container'>
                <div className='nebosh-header pt-5 py-5'>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 py-5'>
                            <h5 className='h2 text-center'>ISO 45001:2018</h5>

                            <p className='py-5 text-center'>
                                ISO 45001 is the world’s International standard
                                for occupational health & safety, issued to
                                protect employees and visitors from work related
                                accidents and diseases. ISO 45001 certification
                                is designed to mitigate factors that can cause
                                employees and businesses irreparable harm.
                            </p>
                        </div>
                    </div>

                    <div className='row m-2'>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 border py-3 pt-3 rounded'>
                            <div className='single-information'>
                                <h4>ISO 45001:2018</h4>
                                <p>
                                    ISO 45001 is the world’s International
                                    standard for occupational health & safety,
                                    issued to protect employees and visitors
                                    from work related accidents and diseases.
                                    ISO 45001 certification is designed to
                                    mitigate factors that can cause employees
                                    and businesses irreparable harm.
                                </p>
                                <br />
                                {/* 02 */}
                                <div className='details-info'>
                                    <h5>Aim or Purpose(why this course)</h5>
                                    <div className='main-list'>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                • To improve safety and health
                                                of employees and other
                                                stakeholders.
                                            </li>
                                            <li className='list-group-item'>
                                                • To benefit a company and its’
                                                overall businesses.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 02 */}
                                <div className='course-content pt-3'>
                                    <h5>Who can attend?</h5>
                                    <p>
                                        Any organization or person with the
                                        responsibility of safety & health
                                        management can do this course.
                                    </p>

                                    <div className='main-list'>
                                        <h5>Benefits of ISO 45001:2018</h5>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                • Improve hazard identification
                                                and risk assessment
                                            </li>
                                            <li className='list-group-item'>
                                                • Reduces overall cost of
                                                incidents at the workplace and
                                                the number of premiums claimed.
                                            </li>
                                            <li className='list-group-item'>
                                                • Enhances the involvement of
                                                leadership and participation
                                                from workers.
                                            </li>
                                            <li className='list-group-item'>
                                                • Enhances organizations’
                                                performances.
                                            </li>
                                            <li className='list-group-item'>
                                                • This course will lead towards
                                                fewer workplace injuries and
                                                illnesses which will eventually
                                                result into more productivity.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='main-list pt-3'>
                                        <ul className='list-group'>
                                            <h5>Assessment</h5>
                                            <li className='list-group-item'>
                                                • MCQ 100 Marks
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='main-list pt-3'>
                                        <h5 className=''>Why BESI?</h5>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                • We are known as the global
                                                leader in certification, working
                                                with clients in virtually any
                                                sector.
                                            </li>
                                            <li className='list-group-item'>
                                                • An ISO 45001:2018 from BESI
                                                Private Limited will help any
                                                organization to improve its’
                                                business
                                            </li>
                                            <li className='list-group-item'>
                                                • BESI has well trained and
                                                highly experienced trainer
                                                panel.
                                            </li>
                                            <li className='list-group-item'>
                                                • BESI provides easy and
                                                spontaneous course materials.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='main-list pt-3'>
                                        <h5 className=''>Course Duration</h5>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                • 5 days course( additional
                                                classes if needed)
                                            </li>
                                            <li className='list-group-item'>
                                                • Online
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='main-list pt-3'>
                                        <h5 className=''>Course Fee:</h5>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                Course Fee: 20,000 BDT (approx.
                                                USD 240)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='button-div pt-3'>
                                    <Link to='/payment' target='_blank'>
                                        <button className='btn btn-main btn-lg btn-block'>
                                            Pay Course
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Iso1;
