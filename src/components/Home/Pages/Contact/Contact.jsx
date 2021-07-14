import React from 'react';
import './Contact.css';
import { apiEndpoint } from '../../../../App';

const Contact = () => {
    const createMessage = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const message = e.target[3].value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
            }),
        };
        fetch(`${apiEndpoint}/contactus`, requestOptions)
            // .then((response) => response.json())
            .then((data) => alert('Message Send'));
    };

    return (
        <div className='container py-5'>
            <div id='fh5co-main'>
                <div
                    className='fh5co-narrow-content animate-box fadeInLeft animated'
                    data-animate-effect='fadeInLeft'>
                    <div className='row'>
                        <div className='contact-us pt-3 py-2 border rounded navbar-color'>
                            <div className='text-center'>
                                <h1>Contact Us:</h1>
                                <p>
                                    We are a passionate Engineering and safety
                                    Institute that specializes in beautiful and
                                    easy-to-use Engineering and safety services.
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className='contact-methods pt-5'>
                                        <h5>PHONE: </h5>
                                        <p className='text-black-50'>
                                            {' '}
                                            <strong>Chottogram: </strong>
                                            01309319340
                                        </p>
                                        <p className='text-black-50'>
                                            {' '}
                                            <strong>Dhaka: </strong>
                                            01925996363
                                        </p>
                                        <p className='text-black-50'>
                                            {' '}
                                            <strong>Consultancy: </strong>
                                            01961922475
                                        </p>
                                        <p className='text-black-50'>
                                            {' '}
                                            <strong>IELTS + India: </strong>
                                            01894097081
                                        </p>
                                        <h5>EMAIL: </h5>
                                        <p className='text-black-50'>
                                            besiinstitute122@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                    <div className='address-methods pt-5 py-5'>
                                        <h5>ADDRESS</h5>
                                        <p className='text-black-50'>
                                            {' '}
                                            <strong>Head Office: </strong>
                                            147/H, Darul Huda Bhaban Green Road,
                                            Dhaka-1215(lift-5)
                                        </p>
                                        <p className='text-black-50'>
                                            {' '}
                                            <strong>CTG Office: </strong>
                                            H-87, Road-7, or Nijam Road, GEC
                                            Chittagong.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-md-offset-1 pt-4'>
                            <h1>Get In Touch</h1>
                        </div>
                    </div>
                    <br />
                    <br />

                    <form action='' onSubmit={createMessage}>
                        <div className='row'>
                            <div className='col-md-10 col-md-offset-1'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Name'
                                            />
                                        </div>
                                        <div className='form-group pt-3'>
                                            <input
                                                type='text'
                                                className='form-control '
                                                placeholder='Email'
                                            />
                                        </div>
                                        <div className='form-group pt-4'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Phone'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <textarea
                                                name=''
                                                id='message'
                                                cols='30'
                                                rows='6'
                                                className='form-control'
                                                placeholder='Message'
                                            />
                                        </div>
                                        <div className='form-group pt-4'>
                                            <input
                                                type='submit'
                                                className='btn btn-main btn-md'
                                                value='Send Message'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
