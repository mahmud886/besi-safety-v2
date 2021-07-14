import React from 'react';
import slide1 from '../../../assets/images/slider/safety-slide-1.jpg';
import slide2 from '../../../assets/images/slider/safety-slide-2.jpg';
import slide3 from '../../../assets/images/slider/safety-slide-3.jpg';
import './Banner.css';
import { Carousel, Button, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <Image
                        className='d-block w-100 carousel-images'
                        src={slide1}
                        alt='First slide'
                        fluid
                    />
                    <Carousel.Caption>
                        <h2>WE ARE</h2>
                        <h1>
                            BANGLADESH ENGINEERING <br /> & <br /> SAFETY
                            INSTITUTE
                        </h1>
                        <p>
                            We are a passionate Engineering and safety Institute
                            that specializes in beautiful and easy-to-use <br />
                            Engineering and safety services.
                        </p>
                        <Button className='btn btn-main btn-md' type='button'>
                            GEETING STARTED
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image
                        className='d-block w-100 carousel-images'
                        src={slide2}
                        alt='Second slide'
                        fluid
                    />
                    <Carousel.Caption>
                        <h1>NEBOSH</h1>
                        <h3>
                            National Examinition Board in Occupational Safety
                            and Health.
                        </h3>
                        <p>
                            NEBOSH which means National Examination Board in
                            Occupational Safety and Health, are UK based
                            awarding body that provides various online courses
                            to the student.
                        </p>
                        <Button className='btn btn-main btn-md' type='button'>
                            GEETING STARTED
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100 carousel-images'
                        src={slide3}
                        alt='Third slide'
                        fluid
                    />
                    <Carousel.Caption>
                        <h1>OTHM</h1>
                        <h3>
                            OTHM : Level 6, Diploma in Occupational Health and
                            Safety
                        </h3>
                        <p>
                            The OTHM Level 6 Diploma in Occupational Health and
                            Safety is developed to provide a thorough knowledge
                            of health and safety management system.
                        </p>
                        <Button className='btn btn-main btn-md' type='button'>
                            GEETING STARTED
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

        // <div className='banner__area d-flex align-items-center'>

        //     <div className='container'>
        //         <div className='banner__content text-center'>
        //             <h2>WE ARE</h2>
        //             <h1>
        //                 BANGLADESH ENGINEERING <br /> & <br /> SAFETY INSTITUTE
        //             </h1>
        //             <p>
        //                 We are a passionate Engineering and safety Institute
        //                 that specializes in beautiful and easy-to-use <br />
        //                 Engineering and safety services.
        //             </p>
        //             <div className=''>
        //                 <button className='btn btn-main btn-md' type='button'>
        //                     GEETING STARTED
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;
