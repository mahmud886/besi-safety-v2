import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { apiEndpoint } from '../../../App';
import TermsConditions from './TermsConditions';

const MainForm = () => {
    let handleSubmit = (event) => {
        event.preventDefault();
        const applied_for = event.target[0].value;
        const name = event.target[1].value;
        const mobile = event.target[2].value;
        const fathers_name = event.target[3].value;
        const fathers_mobile = event.target[4].value;
        const mothers_name = event.target[5].value;
        const mothers_mobile = event.target[6].value;
        const gender = event.target[7].value;
        const email = event.target[8].value;
        const marital_status = event.target[9].value;
        const date_of_birth = event.target[10].value;
        const blood_group = event.target[11].value;
        const nationality = event.target[12].value;
        const religion = event.target[13].value;
        const present_address = event.target[14].value;
        const permanent_address = event.target[15].value;
        const educational_qualification = event.target[16].value;
        const institution = event.target[17].value;
        const passing_year = event.target[18].value;
        const gpa = event.target[19].value;
        const major = event.target[20].value;
        const total_fees = event.target[21].value;
        const discount = event.target[22].value;
        const reference = event.target[23].value;
        const transaction_id = event.target[24].value;
        const mobile_wallet_provider = event.target[25].value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                applied_for: applied_for,
                name: name,
                mobile: mobile,
                fathers_name: fathers_name,
                fathers_mobile: fathers_mobile,
                mothers_name: mothers_name,
                mothers_mobile: mothers_mobile,
                gender: gender,
                email: email,
                marital_status: marital_status,
                date_of_birth: date_of_birth,
                blood_group: blood_group,
                nationality: nationality,
                religion: religion,
                present_address: present_address,
                permanent_address: permanent_address,
                educational_qualification: educational_qualification,
                institution: institution,
                passing_year: passing_year,
                gpa: gpa,
                major: major,
                total_fees: total_fees,
                discount: discount,
                reference: reference,
                transaction_id: transaction_id,
                mobile_wallet_provider: mobile_wallet_provider,
            }),
        };
        fetch(`${apiEndpoint}/coursebookings`, requestOptions)
            // .then((response) => response.json())
            .then((data) => alert('All Data Save to database..'));
    };
    return (
        <>
            <Container className='pb-5'>
                <div className='py-5'>
                    <h2 className='navbar-color text-center p-3 rounded h1'>
                        ADMISSION FORM
                    </h2>
                </div>
                <Form
                    className='border p-4 rounded navbar-color'
                    onSubmit={handleSubmit}>
                    <Row>
                        {/* 01 */}
                        <Col md={12}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label>Course Applied for</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Which Course'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/* Applicants Name And Mobile */}
                        <Col md={8}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Name of Applicants
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Applicants name'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/* 03  */}
                        <Col md={4}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>Mobile</Form.Label>
                                <Form.Control
                                    required
                                    type='tel'
                                    placeholder='phone number'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Applicants Name And Mobile */}

                        {/* Applicants Father's And Mobile */}
                        <Col md={8}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Father's Name of Applicants
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Applicants Father name'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/* 03  */}
                        <Col md={4}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>Mobile</Form.Label>
                                <Form.Control
                                    required
                                    type='tel'
                                    placeholder='phone number'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Applicants Father's And Mobile */}

                        {/* Applicants Mother's And Mobile */}
                        <Col md={8}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Mother's Name of Applicants
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Applicants Mother name'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>Mobile</Form.Label>
                                <Form.Control
                                    required
                                    type='tel'
                                    placeholder='phone number'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Applicants Mother's And Mobile */}

                        {/* Gender And Email */}

                        <Col md={6}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>Gender</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Male / Female'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* 04  */}
                        <Col md={6}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>Email</Form.Label>
                                <Form.Control
                                    required
                                    type='email'
                                    placeholder='Your email'
                                    defaultValue='youremail@gmail.com'
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Gender And Email */}

                        {/* Marital Status, Date of birth And Blood Group */}

                        <Col md={6}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>
                                    Marital Status
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Married / Unmarried'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* 04  */}
                        <Col md={4}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Date of Birth
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Your birth date'
                                    defaultValue='10-12-1996'
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Blood Group
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Blood Group'
                                    defaultValue='(O+)'
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Marital Status, Date of birth And Blood Group */}

                        {/* Nationality And Religion */}

                        <Col md={6}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>
                                    Nationality
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Bangladeshi'
                                    defaultValue='Bangladeshi'
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Religion
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Religion'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Nationality And Religion */}

                        {/*  Address */}
                        <Col md={12}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Present Address
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Present Address'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Permanent Address
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Permanent Address'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/*  Address */}

                        {/* Education Qualification */}
                        <Col md={3}>
                            <Form.Group controlId='validationCustom01'>
                                <Form.Label className='pt-2'>
                                    Name of Exam
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='SCC/HSC/Diploma'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>
                                    Name of Institute
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Name of Institute'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>Year</Form.Label>
                                <Form.Control
                                    required
                                    type='number'
                                    placeholder='Year'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>Grade</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Grade'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label className='pt-2'>Group</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Group'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Education Qualification */}

                        {/* Payment */}
                        <Col md={3} className='py-2'>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label>Total Payment</Form.Label>
                                <Form.Control
                                    required
                                    type='number'
                                    placeholder='Total Payment'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2} className='py-2'>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label>Discount</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Discount'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2} className='py-2'>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label>Reference</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Reference'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3} className='py-2'>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label>Transaction ID</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Transaction ID'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2} className='py-2'>
                            <Form.Group controlId='validationCustom02'>
                                <Form.Label>Transaction Method</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='bKash/Nagad/Bank'
                                    defaultValue=''
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {/* Payment */}
                    </Row>

                    <div className='py-3'>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Declaration</Card.Title>
                                <Card.Text>
                                    I agree to follow your plan of study and I
                                    will pay my course fee in full, the fees
                                    paid once is non refundable. The decision of
                                    the Institute authorities will be final in
                                    all respect. As a token of acceptance of all
                                    conditions/rules and regulation of this
                                    Institute. Applicable time to time and also
                                    know Bangladesh Engineering and safety
                                    Institute will impart training only to get a
                                    good job, but Bangladesh Engineering and
                                    safety Institute will not ensure any job. I
                                    here by certify the above statements are
                                    correct and complete to the best in my
                                    knowledge. We signed below.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <TermsConditions />

                    <Form.Group className='py-3'>
                        <Form.Check
                            required
                            label='Agree to terms and conditions'
                            feedback='You must agree before submitting.'
                        />
                    </Form.Group>
                    <Button className='btn btn-main btn-md' type='submit'>
                        Submit form
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default MainForm;
