import React from 'react';
import './Result.css';
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Card,
    Form,
} from 'react-bootstrap';
import { useState } from 'react';
import { apiEndpointV1 } from '../../../../App';
import Contact from '../Contact/Contact';

const Result = () => {
    const [results, setResults] = useState([]);
    const searchResult = (event) => {
        event.preventDefault();

        const searchTerm = event.target[0].value;

        // fetch(
        //     `https://besi-bd.herokuapp.com/api/v1/courseresults?certificate_no=2021-1008`
        // )
        fetch(`${apiEndpointV1}/courseresults?certificate_no=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                setResults([data]);
            });
    };
    // const [results, setResults] = useState([]);

    // useEffect(() => {
    //     fetch(`${apiEndpointV1}/courseresults`)
    //         .then((res) => res.json())
    //         .then((results) => {
    //             setResults(results);
    //         });
    // }, []);

    return (
        <>
            <div className='py-5 bg-light shadow-sm'>
                <h5 className='text-center p-3 rounded h1'>Results</h5>
                <p className='text-center'>results</p>
            </div>
            <Container className='py-5'>
                <div className='py-3'>
                    <h2 className='text-center p-3 rounded h1'>
                        SEARCH YOUR RESULT
                    </h2>
                </div>
                {/* < ------------------------- SEARCH BOX------------------------- >*/}
                <div className='py-4 w-50 m-auto'>
                    <Form onSubmit={searchResult}>
                        <InputGroup className='mb-3'>
                            <FormControl
                                placeholder='Input Your Valid Certificate No'
                                aria-label=''
                                aria-describedby='basic-addon2'
                            />
                            <Button
                                className='navbar-color btn btn-main btn-md'
                                type='submit'>
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </div>
                {/* < ------------------------- SEARCH BOX------------------------- /> */}
                <div className='py-5'>
                    {results.map((result, key) => (
                        <Card
                            key={key}
                            style={{ width: '100%' }}
                            className='p-5'>
                            <Card.Header className='text-center navbar-color'>
                                Student Result
                            </Card.Header>
                            <Card.Body className='text-center'>
                                <h3>Name: {result.student_name}</h3>
                                <p>
                                    Course Category: {result.student_category}
                                </p>
                                <p>Student No: {result.student_serial_no}</p>
                                <p>
                                    Student Certificate No:
                                    {result.student_certificate_no}
                                </p>
                            </Card.Body>
                            <Card.Footer className='navbar-color h3 text-center'>
                                {result.is_passed ? 'PASSED' : 'FAILED'}
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
                <Contact />
            </Container>
        </>
    );
};

export default Result;
