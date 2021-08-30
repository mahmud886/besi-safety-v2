import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { apiEndpoint } from '../../../../App';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`${apiEndpoint}/blogposts/${id}`)
            .then((res) => res.json())
            .then((blogs) => {
                setBlogs(blogs);
            });
    }, [id]);

    const { title, description, img, created_at, created_by } = blogs;
    return (
        <>
            <Container className='pb-5'>
                <div className='py-3'>
                    <h2 className=' text-center p-3 rounded h1'>
                        BLOG DETAILS
                    </h2>
                </div>
                <div className='border rounded'>
                    <Card style={{ width: '90%' }} className='mx-auto m-4'>
                        <Card.Img
                            variant='top'
                            src={img}
                            className='img-fluid'
                        />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-muted d-flex justify-content-between'>
                            <div className=''>{created_at}</div>
                            <div className=''>Created By({created_by})</div>
                        </Card.Footer>
                    </Card>
                </div>
            </Container>
        </>
    );
};

export default BlogDetails;
