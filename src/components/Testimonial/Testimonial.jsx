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
        url: 'https://randomuser.me/api/portraits/men/90.jpg',
        username: 'Shadrack',
        testimonial:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        id: 2,
        url: 'https://randomuser.me/api/portraits/men/92.jpg',
        username: 'Shuvo',
        testimonial:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        id: 3,
        url: 'https://randomuser.me/api/portraits/men/95.jpg',
        username: 'Shbud',
        testimonial:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        id: 4,
        url: 'https://randomuser.me/api/portraits/men/97.jpg',
        username: 'Priyom',
        testimonial:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        id: 5,
        username: 'Payel',
        url: 'https://randomuser.me/api/portraits/men/98.jpg',
        testimonial:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        id: 6,
        url: 'https://randomuser.me/api/portraits/men/99.jpg',
        username: 'Anish',
        testimonial:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
];

const Testimonial = () => {
    return (
        <div className='container'>
            <div className='py-4 text-center'>
                <h1 className='text-uppercase'>Testimonial</h1>
            </div>
            <Swiper
                className='swiper'
                // install Swiper modules
                modules={[Pagination, A11y, EffectFade]}
                effect='cube'
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {data.map((user) => (
                    <SwiperSlide key={user.id} className='swiper-slide'>
                        <div className='slide-content shadow-sm p-3 mb-5 bg-light rounded'>
                            <div className='user-image'>
                                <img
                                    src={user.url}
                                    alt=''
                                    className='user-photo'
                                />
                            </div>
                            <div className='py-2'>
                                <h5>{user.username}</h5>
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
