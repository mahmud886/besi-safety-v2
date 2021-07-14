import React from 'react';
import './Result.css';
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Card,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { apiEndpoint } from '../../../../App';

const Result = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`${apiEndpoint}/courseresults`)
            .then((res) => res.json())
            .then((results) => {
                setResults(results);
            });
    });

    return (
        <>
            <Container className='py-3'>
                <div className='py-3'>
                    <h2 className='navbar-color text-center p-3 rounded h1'>
                        SEARCH YOUR RESULT
                    </h2>
                </div>
                {/* < ------------------------- SEARCH BOX------------------------- >*/}
                <div className='py-4 w-50 m-auto'>
                    <InputGroup className='mb-3'>
                        <FormControl
                            placeholder='Input Your Certificate No'
                            aria-label=''
                            aria-describedby='basic-addon2'
                        />
                        <Button className='navbar-color btn btn-main btn-md'>
                            Search
                        </Button>
                    </InputGroup>
                </div>
                {/* < ------------------------- SEARCH BOX------------------------- /> */}
                <div className=''>
                    {results.map((result) => (
                        <Card style={{ width: '100%' }} className='p-5'>
                            <Card.Header className='text-center navbar-color'>
                                Student Result
                            </Card.Header>
                            <Card.Body className='text-center'>
                                <h3>Name: {result.student_name}</h3>
                                <p>
                                    Course Category: {result.student_category}
                                </p>
                                <p>Student No: {result.student_no}</p>
                                <p>
                                    Student Certificate No:{' '}
                                    {result.student_certificate_no}
                                </p>
                            </Card.Body>
                            <Card.Footer className='navbar-color h3 text-center'>
                                PASSED
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Result;
