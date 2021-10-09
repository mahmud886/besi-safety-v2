import React from 'react';
import './Navbar.css';
import Logo from '../../../assets/images/logo.png';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <>
            <div className='navbar-color sticky-top'>
                <Container className=''>
                    <Navbar
                        expand='lg'
                        className=' rounded justify-content-between'>
                        <div>
                            <Navbar.Brand>
                                <LinkContainer to='/'>
                                    <img
                                        src={Logo}
                                        alt=''
                                        className='img-fluid'
                                    />
                                </LinkContainer>
                            </Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls='navbarScroll' />
                            <Navbar.Collapse id='navbarScroll'>
                                <Nav
                                    className='mr-auto my-2 my-lg-0'
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>
                                    <LinkContainer to='/'>
                                        <Nav.Link>Home</Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown
                                        id='nav-dropdown-dark-example'
                                        title='About'
                                        menuVariant='dark'>
                                        <LinkContainer to='/about'>
                                            <NavDropdown.Item>
                                                About BesiBD
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/mission-vision'>
                                            <NavDropdown.Item>
                                                Mission & Vison
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/accreditation'>
                                            <NavDropdown.Item>
                                                Accreditation
                                            </NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/our-policy'>
                                            <NavDropdown.Item>
                                                Our Policy
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                    <LinkContainer to='/courses'>
                                        <Nav.Link>Courses</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/calendar'>
                                        <Nav.Link>Calendar</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/result'>
                                        <Nav.Link>Result</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/elearning'>
                                        <Nav.Link>E-Learning</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/blog'>
                                        <Nav.Link>Blog</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/contact'>
                                        <Nav.Link>Contact</Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </Container>
            </div>
        </>
    );
};

export default Navigation;
