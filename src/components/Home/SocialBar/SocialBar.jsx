import React from 'react';
import { Link } from 'react-router-dom';
import './SocialBar.css';

const SocialBar = () => {
    return (
        <>
            <div className='icon-bar'>
                <Link to='#' className='facebook'>
                    <i className='fa fa-facebook'></i>
                </Link>
                <Link to='' className='twitter'>
                    <i className='fa fa-twitter'></i>
                </Link>
                <Link to='#' className='whatsapp'>
                    <i className='fa fa-whatsapp'></i>
                </Link>
                <Link to='#' className='linkedin'>
                    <i className='fa fa-linkedin'></i>
                </Link>
                <Link to='#' className='youtube'>
                    <i className='fa fa-youtube'></i>
                </Link>
            </div>
        </>
    );
};

export default SocialBar;
