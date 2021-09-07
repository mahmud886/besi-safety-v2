import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faLocationArrow,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const styleIcons2 = {
    fontSize: '50px',
    color: 'darkBlue',
    padding: '0px 0px 10px 0px',
    marginTop: '0px',
};

const Footer = () => {
    return (
        <div>
            <footer className='footer-section mx-auto'>
                <div className='container'>
                    <div className='footer-cta pt-5 pb-5 text-center'>
                        <div className='row'>
                            <div className='col-xl-4 col-md-4 mb-30'>
                                <div className='single-cta'>
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        style={styleIcons2}
                                    />
                                    <div className='cta-text pt-3'>
                                        <h4>Find us</h4>
                                        <div>
                                            147/H, Darul Huda Bhaban Green Road,
                                            Dhaka-1215(lift-5)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-md-4 mb-30'>
                                <div className='single-cta'>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={styleIcons2}
                                    />
                                    <div className='cta-text d-block pt-3'>
                                        <h4>Call us</h4>
                                        <span>01925996363</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-md-4 mb-30'>
                                <div className='single-cta'>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={styleIcons2}
                                    />
                                    <div className='cta-text pt-3 d-block'>
                                        <h4>Mail us</h4>
                                        <span>besiinstitute122@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-content pt-5 pb-5'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 mb-50'>
                                <div className='footer-widget'>
                                    <div className='footer-logo'>
                                        <Link to='/'>
                                            <img
                                                src={Logo}
                                                alt=''
                                                className='img-fluid'
                                                width='105px'
                                            />
                                        </Link>
                                    </div>
                                    <div className='footer-text'>
                                        <p>
                                            BESI is Countrie's No.1 Safety
                                            Training Institute providing
                                            Occupational, Health and Safety
                                            Courses; furthermore with safety
                                            training, Consultancy solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 mb-30'>
                                <div className='footer-widget'>
                                    <div className='footer-widget-heading'>
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/about'>About</Link>
                                        </li>
                                        <li>
                                            <Link to='/courses'>Courses</Link>
                                        </li>

                                        <li>
                                            <Link to='/result'>Result</Link>
                                        </li>
                                        <li>
                                            <Link to='/blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact'>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 mb-50'>
                                <div className='footer-widget'>
                                    <div className='footer-widget-heading'>
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className='footer-text mb-25'>
                                        <p>
                                            Don’t miss to subscribe to our new
                                            feeds, kindly fill the form below.
                                        </p>
                                    </div>
                                    <div className='subscribe-form'>
                                        <form action='#'>
                                            <input
                                                type='text'
                                                placeholder='Email Address'
                                            />
                                            <button className='btn btn-main btn-md'>
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='d-flex justify-content-center pb-4'>
                            <Link to='/payment'>
                                <button
                                    className='btn btn-main btn-md'
                                    type='submit'>
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='copyright-area'>
                    <div className='container'>
                        <div className='row bg-white rounded'>
                            <div className='col text-center '>
                                <div className='copyright-text'>
                                    <li className='nav-link'>
                                        Copyright &copy; 2021, All Right
                                        Reserved <Link to=''>Snigdho</Link> &{' '}
                                        <Link to=''>Meer</Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
