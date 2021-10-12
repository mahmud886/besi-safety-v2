import React from 'react';
import SwiperCore, {
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Testimonial.css';

SwiperCore.use([Navigation, Scrollbar, Pagination, A11y, EffectFade]);

const data = [
    {
        id: 1,
        url: 'https://www.unileadehs.com/wp-content/uploads/2021/09/tajeq_ahmed_list.jpg',
        username: 'Tajeq Ahmed',
        testimonial:
            'It’s an immense pleasure to keep in touch with UNILEAD EHS & SUSTAINABILITY PRIVATE LIMITED GROUP. As a student I have always got specific information from them which reflects their professionalism and excellent collaboration.',

        orientation: 'Organization: Chevron | Country: Bangladesh',
    },
    {
        id: 2,
        url: 'https://www.unileadehs.com/wp-content/uploads/2021/09/sanjoy_chowhury_list.jpg',
        username: 'Sanjoy Chowdhury',
        testimonial:
            'I have been with HSE field more than 28 years. It is a huge steps in my career in attending with Unilead EHS & Sustainability Private Limited Group. It is really a huge lift in my career with engaging with professional like Mr Anik.',

        orientation:
            'Organization:  SembCorp Marine Integrated Yard Pvt. Ltd | Country: Singapore',
    },
    {
        id: 3,
        url: 'https://www.unileadehs.com/wp-content/uploads/2021/08/Zakir_hossain_list.jpg',
        username: 'Md Zakir Hossain',
        testimonial:
            'I have been with HSE field more than 28 years. It is a huge steps in my career in attending with Unilead EHS & Sustainability Private Limited Group. It is really a huge lift in my career with engaging with professional like Mr Anik.',
        orientation:
            'Organization:  SembCorp Marine Integrated Yard Pvt. Ltd | Country: Singapore',
    },
    {
        id: 4,
        url: 'https://www.unileadehs.com/wp-content/uploads/2021/08/Zakir_hossain_list.jpg',
        username: 'Md Zakir Hossain',
        testimonial:
            'I have been with HSE field more than 28 years. It is a huge steps in my career in attending with Unilead EHS & Sustainability Private Limited Group. It is really a huge lift in my career with engaging with professional like Mr Anik.',
        orientation:
            'Organization:  SembCorp Marine Integrated Yard Pvt. Ltd | Country: Singapore',
    },
    {
        id: 5,
        url: 'https://www.unileadehs.com/wp-content/uploads/2021/09/sanjoy_chowhury_list.jpg',
        username: 'Sanjoy Chowdhury',
        testimonial:
            'I have been with HSE field more than 28 years. It is a huge steps in my career in attending with Unilead EHS & Sustainability Private Limited Group. It is really a huge lift in my career with engaging with professional like Mr Anik.',

        orientation:
            'Organization:  SembCorp Marine Integrated Yard Pvt. Ltd | Country: Singapore',
    },
    {
        id: 6,
        url: 'https://www.unileadehs.com/wp-content/uploads/2021/09/tajeq_ahmed_list.jpg',
        username: 'Tajeq Ahmed',
        testimonial:
            'It’s an immense pleasure to keep in touch with UNILEAD EHS & SUSTAINABILITY PRIVATE LIMITED GROUP. As a student I have always got specific information from them which reflects their professionalism and excellent collaboration.',

        orientation: 'Organization: Chevron | Country: Bangladesh',
    },
];

const Testimonial = () => {
    return (
        <div className='container py-4'>
            <div className=' text-center'>
                <h1 className='text-uppercase'>Testimonial</h1>
            </div>
            <Swiper
                className='swiper'
                // install Swiper modules
                modules={[Pagination, A11y, EffectFade]}
                effect='cube'
                spaceBetween={50}
                slidesPerView={3}
                autoPlay={5000}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {data.map((user) => (
                    <SwiperSlide
                        key={user.id}
                        className='swiper-slide swiper-slide '
                        data-swiper-autoplay='2000'>
                        <div className='slide-content shadow-sm p-3 mb-5 bg-light rounded text-center'>
                            <div className='user-image'>
                                <img
                                    src={user.url}
                                    alt=''
                                    className='user-photo'
                                />
                            </div>

                            <div className='py-1'>
                                <h5>{user.username}</h5>
                                <p>
                                    <strong>{user.orientation}</strong>
                                </p>
                            </div>
                            <div className=''>
                                <p>{user.testimonial}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;
