import React from 'react';
import { Link } from 'react-router-dom';

const ElearningMain = () => {
    return (
        <div>
            <div className='py-5 bg-light shadow-sm'>
                <h5 className='text-center p-3 rounded h1'>
                    Available courses
                </h5>
                <p className='text-center'>e-learning</p>
            </div>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>ISO 45001:2018</h5>
                            <div className='py-2'>
                                <Link to='/elearn/iso1'>
                                    <button className='btn btn-main'>
                                        Click to enter this course
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>OSHA USA</h5>
                            <div className='py-2'>
                                <Link to='/elearn/osha'>
                                    <button className='btn btn-main'>
                                        Click to enter this course
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>Risk Assessment</h5>
                            <div className='py-2'>
                                <button className='btn btn-main'>
                                    Click to enter this course
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>Permit to work</h5>
                            <div className='py-2'>
                                <button className='btn btn-main'>
                                    Click to enter this course
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4 pt-3'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>Health and Safety Leadership</h5>
                            <div className='py-2'>
                                <button className='btn btn-main'>
                                    Click to enter this course
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4  pt-3'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>First Aid Training</h5>
                            <div className='py-2'>
                                <button className='btn btn-main'>
                                    Click to enter this course
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 col-xl-4  pt-3'>
                        <div className='single-courses bg-light text-dark text-center py-5 border rounded shadow-sm'>
                            <h5>In-House Trainings</h5>
                            <div className='py-2'>
                                <button className='btn btn-main'>
                                    Click to enter this course
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElearningMain;
