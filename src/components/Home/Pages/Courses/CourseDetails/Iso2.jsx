import React from 'react';
import { Link } from 'react-router-dom';

const Iso2 = () => {
    return (
        <div>
            <div className='container'>
                <div className='nebosh-header pt-5 py-5'>
                    <h2 className='text-center p-3 rounded h1'>
                        ISO <br />
                        <h5>ISO 14001:2015</h5>
                        <h6>Environmental Management Systems</h6>
                    </h2>

                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 py-5'>
                            <h5 className='h2'>ISO 14001:2015</h5>
                            <hr className='navbar-color m-2 pt-1 rounded' />
                            <p className='m-2'>
                                ISO 14001 is a family of standards related to
                                environmental management that exists to help
                                companies minimize how their operations
                                negatively affect the environment. It also
                                complies with applicable laws, regulations and
                                other environmentally oriented requirements.
                            </p>
                            <hr className='navbar-color m-2 pt-1 rounded' />
                        </div>
                    </div>

                    <div className='row m-2'>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 border  py-3 pt-3 rounded'>
                            <div className='single-information'>
                                <h4>ISO 14001:2015</h4>
                                <p>
                                    ISO 14001 is a family of standards related
                                    to environmental management that exists to
                                    help companies minimize how their operations
                                    negatively affect the environment. It also
                                    complies with applicable laws, regulations
                                    and other environmentally oriented
                                    requirements.
                                </p>
                                <br />
                                {/* 02 */}
                                <div className='details-info'>
                                    <h5>Aim or Purpose(why this course)</h5>
                                    <div className='main-list'>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                • To make management capable of
                                                identifying and controlling the
                                                environmental impact of products
                                                and services.
                                            </li>
                                            <li className='list-group-item'>
                                                • To improve its’ environmental
                                                performance
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 02 */}
                                <div className='course-content pt-3'>
                                    <h5>Who can attend?</h5>
                                    <p>
                                        Any organization or person with the
                                        responsibility of environmental
                                        management can do this course.
                                    </p>

                                    <div className='main-list'>
                                        <h5>Benefits of ISO 14001:2015</h5>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                • Improve a person’s image and
                                                credibility.
                                            </li>
                                            <li className='list-group-item'>
                                                • Helps to comply with legal
                                                requirements.
                                            </li>
                                            <li className='list-group-item'>
                                                • Assist in cost control
                                                improvement.
                                            </li>
                                            <li className='list-group-item'>
                                                • Reduce employee turnover.
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
                                                • An ISO 14001:2015 audit from
                                                BESI Private Limited will help
                                                your organization to develop and
                                                improve environmental
                                                performance.
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
                                            <p>
                                                Additionally, BESI Private
                                                Limited has a history of
                                                successfully executing
                                                large-scale, complex
                                                international projects. Our
                                                people speak the language,
                                                understand the culture of the
                                                local market and operate
                                                globally in a consistent,
                                                reliable and effective manner.
                                            </p>
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
                                    <Link to='/payment-form'>
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

export default Iso2;
