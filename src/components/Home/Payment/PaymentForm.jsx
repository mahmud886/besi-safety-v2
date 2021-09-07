import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
import { apiEndpointV2 } from '../../../App';

const PaymentForm = () => {
    // const history = useHistory();
    const initiatePaymentTransaction = (e) => {
        e.preventDefault();
        const customerName = e.target[0].value;
        const customerEmail = e.target[1].value;
        const customerPhone = e.target[2].value;
        const productName = e.target[3].value;
        const coursePrice = e.target[4].value;
        const customerAddress = e.target[5].value;
        const customerCity = e.target[6].value;
        const customerState = e.target[7].value;
        const customerPostCode = e.target[8].value;
        const customerCountry = e.target[9].value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cus_name: customerName,
                cus_email: customerEmail,
                cus_phone: customerPhone,
                product_name: productName,
                product_price: coursePrice,
                cus_add1: customerAddress,
                cus_city: customerCity,
                cus_state: customerState,
                cus_postcode: customerPostCode,
                cus_country: customerCountry,
            }),
        };
        fetch(`${apiEndpointV2}/payment/initiate-transaction`, requestOptions)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                console.log(responseJSON);
                if (responseJSON.success) {
                    const paymentGetwayURL = responseJSON.data;
                    window.location.replace(paymentGetwayURL);
                } else {
                    alert(responseJSON.msg);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container className='py-5'>
            <h2 className='text-center'>CHECKOUT FORM</h2>
            <Form className='py-5' onSubmit={initiatePaymentTransaction}>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formFullName'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your Full Name'
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Your Email Address'
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                        <Form.Label>Your Mobile Number</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Mobile Number'
                        />
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formFCourseName'>
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Course Name'
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formPrice'>
                        <Form.Label>Course Price</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Course Price'
                        />
                    </Form.Group>
                </Row>

                <Form.Group className='mb-3' controlId='formGridAddress1'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control required placeholder='Enter Your Address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formCity'>
                        <Form.Label>City</Form.Label>
                        <Form.Control required type='text' placeholder='City' />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formState'>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='State'
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formPostCode'>
                        <Form.Label>Post Code</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Post Code'
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formCountry'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Country'
                        />
                    </Form.Group>
                </Row>

                <div className='d-flex justify-content-center pt-3'>
                    <Form.Group className='mb-3' id='formGridCheckbox'>
                        <Form.Check
                            required
                            type='checkbox'
                            label='Check me out'
                        />
                    </Form.Group>
                </div>

                <div className='d-flex justify-content-center'>
                    <Button className='btn btn-main btn-md' type='submit'>
                        Checkout
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default PaymentForm;
