import React from 'react';
import './Service.css';

// import nebosh from '../../../assets/images/services/service1.jpg';
import iosh from '../../../assets/images/services/service2.jpg';
import highfield from '../../../assets/images/services/service3.jpg';
import aosh from '../../../assets/images/services/service4.jpg';

const Service = () => {
    return (
        <div className='container pt-5 py-5'>
            <div className='row'>
                <div className='col-md-4 col-sm-12 col-xl-4  text-center'>
                    <div className='service-single-assets rounded shadow-sm navbar-color p-4 mb-3'>
                        <div className='row'>
                            <div className='col-md-4 py-2'>
                                <img
                                    src=''
                                    alt=''
                                    className='rounded'
                                    width='105'
                                    height='105'
                                />
                            </div>
                            <div className='col-md-8'>
                                <h4>NEBOSH</h4>
                                <p>
                                    National Examinition Board in Occupational
                                    Safety and Health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 col-xl-4 text-center'>
                    <div className='service-single-assets rounded shadow-sm navbar-color p-4 mb-3'>
                        <div className='row'>
                            <div className='col-md-4 py-2'>
                                <img
                                    src=''
                                    alt=''
                                    className='rounded '
                                    width='105'
                                    height='105'
                                />
                            </div>
                            <div className='col-md-8'>
                                <h4>ISO</h4>
                                <p>Occupational Health and Safety Management</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 col-sm-12 col-xl-4 text-center'>
                    <div className='service-single-assets rounded shadow-sm navbar-color p-4 mb-3'>
                        <div className='row'>
                            <div className='col-md-4 py-2'>
                                <img
                                    src={iosh}
                                    alt=''
                                    className='rounded '
                                    width='105'
                                    height='105'
                                />
                            </div>
                            <div className='col-md-8'>
                                <h4>IOSH</h4>
                                <p>National Examination Board in OSH</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 col-sm-12 col-xl-4 text-center'>
                    <div className='service-single-assets navbar-color rounded shadow-sm p-4 mb-3'>
                        <div className='row'>
                            <div className='col-md-4 py-2'>
                                <img
                                    src={highfield}
                                    alt=''
                                    className='rounded '
                                    width='105'
                                    height='105'
                                />
                            </div>
                            <div className='col-md-8'>
                                <h4>OTHM</h4>
                                <p>Diploma in Occupational Health and Safety</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 col-sm-12 col-xl-4 text-center '>
                    <div className='service-single-assets navbar-color rounded shadow-sm p-4 mb-3'>
                        <div className='row'>
                            <div className='col-md-4 py-2'>
                                <img
                                    src={aosh}
                                    alt=''
                                    className='rounded '
                                    width='105'
                                    height='105'
                                />
                            </div>
                            <div className='col-md-8'>
                                <h4>AOSH</h4>
                                <p>AOSH Awarding Body UK LTD.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 col-xl-4 text-center'>
                    <div className='service-single-assets navbar-color rounded shadow-sm p-4 mb-3'>
                        <div className='row'>
                            <div className='col-md-4 py-2'>
                                <img
                                    src=''
                                    alt=''
                                    className='rounded'
                                    width='105'
                                    height='105'
                                />
                            </div>
                            <div className='col-md-8'>
                                <h4>OSHA</h4>
                                <p>IASP OSHA 30-hour General Industry Course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
