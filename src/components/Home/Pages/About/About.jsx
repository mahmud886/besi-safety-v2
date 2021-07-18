import React from 'react';
import './About.css';
import chairman from '../../../../assets/images/chairman.png';
import missionVison from '../../../../assets/images/mission-vision.jpg';

const About = () => {
    return (
        <div>
            <div className='container pt-5 py-5'>
                <div className='row'>
                    <div className='col-xl-4 col-md-4 col-sm-12 col-xs-12'>
                        <div className='single-section text-center '>
                            <div className='img-section'>
                                <img
                                    src={chairman}
                                    alt=''
                                    className='rounded'
                                />
                            </div>
                            <div className='single-section-content border rounded'>
                                <div className='chairman-content pt-3'>
                                    <h4>MR. MAFIJUL ISLAM ANIK</h4>
                                    <p>(FOUNDER & CHAIRMAN)</p>
                                </div>
                                <div className='chairman-itentity py-2'>
                                    <p>
                                        BESI Privet Limited (Bangladesh
                                        Engineering & Safety Institute){' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-8 col-md-8 col-sm-12 col-xs-12'>
                        <div className='single-section border rounded '>
                            <div className='about-us text-center pt-2'>
                                <h2 className=''>About Us</h2>
                                <span className='small  p-1 rounded'>
                                    Bangladesh Engineering & Safety Institute
                                </span>
                            </div>
                            <div className='about-us-content m-3 text-justify'>
                                <p>
                                    BESI , To make workplace more safer to all,
                                    we make priority on safety. We provide the
                                    most indispensable and essential safety
                                    training and solutions for the industrial
                                    world.
                                </p>
                                <p>
                                    BESI PVT. LTD was founded in 2018. We are
                                    authorized by Bangladesh Govt. we came
                                    forward to deliver various international
                                    accredited training courses.
                                </p>
                                <p>
                                    In industries where innovation occurs with
                                    technologies and process in a persistent and
                                    changing pace, we value endurance and
                                    perseverance as high as adaptability to
                                    provide safety solutions.
                                </p>
                                <p>
                                    We value your hard earned money. We invest
                                    and focus on quality and results than
                                    marketing and sales. We train 1000+ Safety
                                    Professionals every year anchored across the
                                    globe.
                                </p>
                                <p>
                                    We consult, audit and provide HSEQ (Health
                                    Safety Environment Quality) standards to
                                    your organization. The requisite solutions
                                    and services we offer will salvage your
                                    business firm from any financial penalty and
                                    liabilities thus corroborating your company
                                    to comply with all safety regulations and
                                    helps to abide by the health and safety laws
                                    preventing any damage that could possibly
                                    occur to your employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-mission-vision pt-5 py-5 '>
                            <div className='mission '>
                                <h4 className=' h2'>Our Misson</h4>

                                <p className='pt-3'>
                                    To gain a reputation by training, auditing,
                                    consulting and qualifying professionals and
                                    corporate companies through innovation and
                                    to grow along with them in creativity,
                                    quality, productivity, team work and set
                                    exemplary ethical values.
                                </p>
                                <hr />
                            </div>
                            <div className='vision'>
                                <h4 className='h2'>Our Vison</h4>
                                <p className='pt-3'>
                                    To enable aspirants to pursue a successful
                                    OHS qualification. To set and achieve safety
                                    standard across various industrial segments
                                    in different geographies. Our Core Value In
                                    this competitive era, many organizations are
                                    striving hard to manage the balance with
                                    core values and fundamental principles
                                    against challenging demands of individual
                                    accountability, determined commitment and
                                    sustainability. We at BESI have the courage
                                    to carry forth our belief during the battle
                                    of business with our tolerance & innovation
                                    and also resist various temptations to a
                                    quicker monetary result however we do not
                                    compromise our core values for which we
                                    stand. We empower the team members to lead
                                    and make decisions.
                                </p>
                                <hr />
                            </div>
                            <div className='why0us'>
                                <h4 className='h2'>Why Choose Us? </h4>

                                <p className='pt-3'>
                                    We hold a prominent reputation in our field
                                    with our ability to deliver high-quality
                                    services with better value additions and it
                                    is which unremittingly motivates us to
                                    qualify our students through innovation and
                                    to grow along with them in creativity,
                                    quality, productivity and set exemplary
                                    ethical values.
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='single-mission-vision pt-5 py-5 '>
                            <img
                                src={missionVison}
                                alt=''
                                className='border rounded'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
