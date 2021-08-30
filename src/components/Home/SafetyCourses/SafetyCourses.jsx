import React from 'react';
import './SafetyCourses.css';
import safty1 from '../../../assets/images/safety/1.jpg';
import safty2 from '../../../assets/images/safety/2.jpg';
import safty3 from '../../../assets/images/safety/3.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SafetyCourses = () => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h1>MOST IN DEMAND HEALTH AND SAFETY COURSES</h1>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-4 mr-sm-auto'>
                    <Col xs={12} md={12} lg={4} xl={4} sm={12}>
                        <Card
                            className='mx-auto mb-3'
                            style={{ width: '24rem' }}>
                            <Card.Img variant='top' src={safty1} />
                            <Card.Body>
                                <Card.Title>IOSH MS</Card.Title>
                                <hr className='navbar-color' />
                                <Card.Text>
                                    Safety Simplified is created by BSEI, is an
                                    innovative way of learning safety. Safety
                                    Simplified course is excited as the learner
                                    can feel different learning experiences.
                                </Card.Text>
                                <hr className='navbar-color' />
                                <LinkContainer to='/courses'>
                                    <button
                                        className={'btn btn-main btn-md'}
                                        type='button'>
                                        Our Courses
                                    </button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={4} xl={4} sm={12}>
                        <Card
                            className='mx-auto mb-3'
                            style={{ width: '24rem' }}>
                            <Card.Img variant='top' src={safty2} />
                            <Card.Body>
                                <Card.Title>ISO</Card.Title>
                                <hr className='navbar-color' />
                                <Card.Text>
                                    It is essential in the field of safety that
                                    ISO International General Certificate is
                                    recognized and respected qualification helps
                                    to acquire competence in protecting
                                    workplace safety.
                                </Card.Text>
                                <hr className='navbar-color' />
                                <LinkContainer to='/courses'>
                                    <button
                                        className={'btn btn-main btn-md'}
                                        type='button'>
                                        Our Courses
                                    </button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={4} xl={4} sm={12}>
                        <Card
                            className='mx-auto mb-3'
                            style={{ width: '24rem' }}>
                            <Card.Img variant='top' src={safty3} />
                            <Card.Body>
                                <Card.Title>OTHM</Card.Title>
                                <hr className='navbar-color' />
                                <Card.Text>
                                    Brand New course, Level 6 for Process Safety
                                    Management is suitable for the people across
                                    the globe who work in the oil and gas
                                    sector, chemicals, industries or process
                                    industries.
                                </Card.Text>
                                <hr className='navbar-color' />
                                <LinkContainer to='/courses'>
                                    <button
                                        className={'btn btn-main btn-md'}
                                        type='button'>
                                        Our Courses
                                    </button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SafetyCourses;
