import React from 'react';
import './Counter.css';
const Counter = () => {
    return (
        <div className='navbar-color text-white p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-counter text-center p-2'>
                            <h1 className='h1'>180+</h1>
                            <hp>Total Batch</hp>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-counter text-center p-2'>
                            <h1 className='h1'>300+</h1>
                            <hp>Safety Courses</hp>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-counter text-center p-2'>
                            <h1 className='h1'>150+</h1>
                            <hp>ICC Registration</hp>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-counter text-center p-2'>
                            <h1 className='h1'>500+</h1>
                            <hp>Current Project</hp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
