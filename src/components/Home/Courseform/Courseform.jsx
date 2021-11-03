import React from 'react';
import './Courseform.css';
const Courseform = () => {
    return (
        <div className='container '>
            <div className='row py-3'>
                <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12'>
                    <div className='single-course-content'>
                        <h4>
                            ISO COURSES IN BD WITH GREAT LEARNING EXPERIENCE!
                        </h4>
                        <p className='pt-3'>
                            Institute of Occupational Safety & Health is a
                            global organization for health & safety
                            professionals. It is a UK based organization which
                            offers professional health & safety courses to
                            promote safety throughout the world. IOSH has around
                            48,000 members from 130 countries in the world. BESI
                            Private Limited is accredited in providing training
                            for IOSH Managing Safely in Bangladesh and global
                            grounds.
                        </p>
                        <p className='pt-3'>
                            Furthermore, BESI is an ISO 9001:2015 Certified
                            Safety training institute in BD that offers ISO
                            courses in BD and International Safety
                            Qualification. For this reason, Iso qualification
                            helps learners and job seekers to get an assured
                            place in the suitable industry.
                        </p>
                        <p className='pt-3'>
                            Significantly,we have tutors' expertise in their
                            subjects. To be sure, the training is well
                            structured and delivered using a variety of
                            resources. Look into Isofees, ISO course details,
                            and ISO exam dates from Chennai, Vizag, and
                            Pondicherry, where you intend to take, we provide
                            you with job assistance.
                        </p>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <div
                        className='card mx-auto shadow-sm bg-light'
                        style={{ width: 'auto' }}>
                        <div className='card-header navbar-color text-center'>
                            <h6>GET IN TOUCH</h6>
                        </div>
                        <div className='card-body'>
                            <form action=''>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                                    <div className='form-group p-2'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='Full Name'
                                        />
                                    </div>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='form-group p-2'>
                                        <input
                                            className='form-control'
                                            type='email'
                                            placeholder='Email'
                                        />
                                    </div>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='form-group p-2'>
                                        <input
                                            className='form-control'
                                            type='phone'
                                            placeholder='Phone'
                                        />
                                    </div>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='form-group p-2'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='Short message'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='form-group p-3'>
                                        <button
                                            className='btn btn-main btn-md btn-block'
                                            type='submit'>
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courseform;
