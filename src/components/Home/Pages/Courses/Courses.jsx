import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Courses = () => {
    return (
        <>
            <div className='py-5 bg-light shadow-sm'>
                <h5 className='text-center p-3 rounded h1'>COURSES</h5>
                <p className='text-center'>courses</p>
            </div>
            <div className='container'>
                <div className=' pt-5 py-5'>
                    <h4 className='text-center p-3 rounded h2'>
                        SAFETY SHORT COURSES
                    </h4>
                    <div className='row pt-5 mx-auto'>
                        {/* <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-courses shadow-sm'>
                            <div
                                className='card mx-auto mb-4'
                                style={{ width: '300px' }}>
                                <h5 className='card-header navbar-color text-white text-center'>
                                    NEBOSH
                                </h5>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        National Examinition Board in
                                        Occupational Safety and Health.
                                    </h5>
                                    <hr className='navbar-color' />
                                    <p className='card-text'>
                                        NEBOSH which means National Examination
                                        Board in Occupational Safety and Health,
                                        are UK based awarding body that provides
                                        various online courses to the student.
                                    </p>
                                    <hr className='navbar-color' />
                                    <Link to='/courses/nebosh'>
                                        <button
                                            className='btn btn-main btn-md'
                                            type='button'>
                                            SEE DETAILS
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}

                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        IOSH MS
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            IOSH Managing Safely is delivered
                                            using animated presentation through
                                            LMS
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            Iosh MS course V5.0 is designed for
                                            managers and supervisors from any
                                            organization,therefore they build
                                            confidence also energy level within
                                            them.
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/ioshms'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        ISO 45001:2018
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            ISO 45001:2018 Occupational Health
                                            and Safety Management Systems
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            THis training from BESI PVT LTD –
                                            learn how to perform internally, the
                                            second party, third party audits of
                                            OHS management systems.
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/iso1'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*    05   */}
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 '>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        ISO 14001:2015
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            ISO 14001:2015 environmental
                                            management systems auditor/lead
                                            auditor training from BESI Private
                                            Limited
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            – develop the skills to audit
                                            environmental management systems.
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/iso2'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 06 */}
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        ISO 9001:2015
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            The competition with ISO 9001:2015
                                            certification with an audit against
                                            this internationally
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            -recognized quality management
                                            system (QMS) standard from BESI
                                            Private Limited,continuously improve
                                            their performance.
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/iso3'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  07  */}
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        OTHM
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            OTHM : Level 6, Diploma in
                                            Occupational Health and Safety
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            The OTHM Level 6 Diploma in
                                            Occupational Health and Safety is
                                            developed to provide a thorough
                                            knowledge of health and safety
                                            management system.
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/othm'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        AOSH
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            BESI Institute is offering AOSH UK,
                                            BESI PVT LTD is first and number one
                                            AOSH Approved
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            Our ATP No is: 5059. We Have good
                                            tutor panel to AOSH training and
                                            assist Individuals in getting
                                            certificate from AOSH (UK).
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/aosh'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 '>
                            <div className='single-courses shadow-sm'>
                                <div
                                    className='card mx-auto mb-4'
                                    style={{ width: '300px' }}>
                                    <h5 className='card-header navbar-color text-white text-center'>
                                        OSHA
                                    </h5>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            BESI Institute is offering OSHA BESI
                                            PVT LTD is first and number one OSHA
                                            Approved
                                        </h5>
                                        <hr className='navbar-color' />
                                        <p className='card-text'>
                                            IASP OSHA 30-hour General Industry
                                            Course has been designed to deliver
                                            various training to working
                                            professionals with health and safety
                                            responsibility.
                                        </p>
                                        <hr className='navbar-color' />
                                        <Link to='/courses/osha'>
                                            <button
                                                className='btn btn-main btn-md'
                                                type='button'>
                                                SEE DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* New Crouse */}
                    </div>

                    {/* Short Courses */}

                    <div className='short-courses pt-5'>
                        <h4 className='text-center p-3 rounded h2'>
                            SAFETY SHORT COURSES
                        </h4>
                        <div className='row pt-5'>
                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            FIRST AID
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                Since the 1st of October, 2013
                                                it has been employer’s
                                                responsibility to provide first
                                                aiders in the workplace. All
                                                organisations must ensure
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            HEALTH SAFETY
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                BESI - qualifications offer an
                                                increasing range of Health and
                                                Safety qualifications to meet
                                                with employment and workplace
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            FOOD SAFETY
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                People die or are seriously
                                                injured as a result of fire in
                                                the workplace. Fire can cost
                                                businesses vast amounts of money
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            CONSTRUCTION SAFETY
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                Country regulations state that
                                                all food handlers must receive
                                                appropriate training in food
                                                safety practices relevant to
                                                their duties.
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            RISK SAFETY
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                Construction Sector is essential
                                                and an integral part of
                                                infrastructure development which
                                                gives tremendous boost to our
                                                country’s economy
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            PERMIT TO WORK SYSTEM
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                Understand the benefits of
                                                comprehensive risk assessments,
                                                and comply with basic
                                                legislation. This Risk
                                                Assessment Training is IOSH
                                                approved.
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='single-courses shadow-sm'>
                                    <div
                                        className='card mx-auto mb-4'
                                        style={{ width: '300px' }}>
                                        <h5 className='card-header navbar-color text-white text-center'>
                                            FIRE SAFETY
                                        </h5>
                                        <div className='card-body'>
                                            <p className='card-text'>
                                                This Technical Measure Document
                                                refers to permit to work systems
                                                required to control work such as
                                                maintenance activities on
                                                chemical plant and so prevent a
                                                major accident.
                                            </p>
                                            <hr className='navbar-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        </>
    );
};

export default Courses;
