import React from 'react';
import './Blog.css';
import Blogs from './Blogs';
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

import { apiEndpointV1 } from '../../../../App';
import Contact from '../Contact/Contact';

// const blogData = [
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     },
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     },
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     },
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     }
// ]

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`${apiEndpointV1}/blogposts`)
            .then((res) => res.json())
            .then((blogs) => {
                setBlogs(blogs);
            });
    });

    const blogsCart = () =>
        blogs.map((singleBlog, index) => {
            return (
                <Col key={index} sm={12} xs={12} md={6} lg={4} xl={3}>
                    <Blogs singleBlogs={singleBlog} />
                </Col>
            );
        });
    return (
        <>
            <div className='py-5 bg-light shadow-sm'>
                <h5 className='text-center p-3 rounded h1'>BLOGS</h5>
                <p className='text-center'>blogs</p>
            </div>
            <Container className='mb-5'>
                <div className='py-5'>
                    <h5 className='text-center p-3 rounded h1'>Single Blogs</h5>
                </div>
                <Row>{blogsCart()}</Row>
            </Container>
            <Contact />
        </>
    );
};

export default Blog;
