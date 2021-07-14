import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Blogs = (props) => {
    const { img, title, description, created_at, id } = props.singleBlogs;

    const history = useHistory();
    let singleBlogDetails = (id) => {
        const url = `blog-details/${id}`;
        history.push(url);
    };
    return (
        <>
            <Card style={{ width: '19rem' }} className='mx-auto mb-4'>
                <Card.Img variant='top' src={img} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'>{created_at}</Card.Footer>
                <Button
                    className='btn btn-main'
                    onClick={() => singleBlogDetails(id)}>
                    See Details
                </Button>
            </Card>
        </>
    );
};

export default Blogs;
