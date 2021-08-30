import React from 'react';
import './Blog.css';
import Blogs from './Blogs';
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

import { apiEndpoint } from '../../../../App';

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
        fetch(`${apiEndpoint}/blogposts`)
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
            <Container className='mb-5'>
                <div className='py-5'>
                    <h5 className='text-center p-3 rounded h1'>BLOGS</h5>
                </div>
                <Row>{blogsCart()}</Row>
            </Container>
        </>
    );
};

export default Blog;
