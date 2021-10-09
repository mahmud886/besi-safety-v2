import { createContext, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './components/Home/Homepage/Homepage';
import Blog from './components/Home/Pages/Blog/Blog';
import Navigation from './components/Home/Navbar/Navigation';
import About from './components/Home/Pages/About/About';

import Courses from './components/Home/Pages/Courses/Courses';

import Calendar from './components/Home/Pages/Calendar/Calendar';
import Result from './components/Home/Pages/Result/Result';
import Contact from './components/Home/Pages/Contact/Contact';
import ErrorPage from './components/Home/Pages/ErrorPage/ErrorPage';
import Footer from './components/Home/Footer/Footer';
// import Nebosh from './components/Home/Pages/Courses/CourseDetails/Nebosh';
import IoshMs from './components/Home/Pages/Courses/CourseDetails/IoshMs';
import Iso1 from './components/Home/Pages/Courses/CourseDetails/Iso1';
import Iso2 from './components/Home/Pages/Courses/CourseDetails/Iso2';
import Iso3 from './components/Home/Pages/Courses/CourseDetails/Iso3';
import Othm from './components/Home/Pages/Courses/CourseDetails/Othm';
import Aosh from './components/Home/Pages/Courses/CourseDetails/Aosh';

import MainForm from './components/Home/UpcomingBatch/MainForm';
import BlogDetails from './components/Home/Pages/Blog/BlogDetails';
import SocialBar from './components/Home/SocialBar/SocialBar';
import Elearning from './components/Home/Pages/Elearning/Elearning';
import PaymentForm from './components/Home/Payment/PaymentForm';
import SuccessPage from './components/Home/Payment/SuccessPage';
import FailurePage from './components/Home/Payment/FailurePage';
import CancelledPage from './components/Home/Payment/CancelledPage';
import Osha from './components/Home/Pages/Courses/CourseDetails/Osha';
import MissonVision from './components/Home/Pages/About/MissonVision';
import Accreditation from './components/Home/Pages/About/Accreditation';
import OurPolicy from './components/Home/Pages/About/OurPolicy';
import Login from './components/Login/Login';
import Hero from './components/Login/Hero';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ElearningMain from './components/Home/Pages/Elearning/ElearningMain';
import ElearnIso1 from './components/Home/Pages/Elearning/ElearingPages/ElearnIso1';
import ElearnOsha from './components/Home/Pages/Elearning/ElearingPages/ElearnOsha';

export let apiEndpointV1 = 'https://besi-bd.herokuapp.com/api/v1';
export let apiEndpointV2 = 'https://besi-bd.herokuapp.com/api/v2';

export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <>
            <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Navigation />
                    <SocialBar />
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/payment' exact component={PaymentForm} />
                        <Route
                            path='/payment/successful'
                            components={SuccessPage}
                        />
                        <Route path='/payment/failed' component={FailurePage} />
                        <Route
                            path='/payment/cancelled'
                            component={CancelledPage}
                        />
                        <Route path='/courses' exact component={Courses} />
                        <Route path='/courses/ioshms' component={IoshMs} />
                        <Route path='/courses/iso1' component={Iso1} />
                        <Route path='/courses/iso2' component={Iso2} />
                        <Route path='/courses/iso3' component={Iso3} />
                        <Route path='/courses/othm' component={Othm} />
                        <Route path='/courses/aosh' component={Aosh} />
                        <Route path='/courses/osha' component={Osha} />
                        <Route path='/about' component={About} />
                        <Route
                            path='/mission-vision'
                            component={MissonVision}
                        />
                        <Route
                            path='/accreditation'
                            component={Accreditation}
                        />
                        <Route path='/our-policy' component={OurPolicy} />

                        <Route path='/calendar' component={Calendar} />
                        <Route path='/result' component={Result} />

                        <Route path='/elearn' exact component={ElearningMain} />

                        <PrivateRoute path='/elearn/iso1'>
                            <ElearnIso1 />
                        </PrivateRoute>
                        <PrivateRoute path='/elearn/osha'>
                            <ElearnOsha />
                        </PrivateRoute>
                        <PrivateRoute path='/elearning'>
                            <Elearning />
                        </PrivateRoute>

                        <Route path='/blog' exact component={Blog} />
                        <Route
                            path='/blog-details/:id'
                            component={BlogDetails}
                        />
                        <Route path='/contact' component={Contact} />
                        <Route path='/admission-form' component={MainForm} />

                        <Route path='/hero' component={Hero} />
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                    <Footer />
                </Router>
            </userContext.Provider>
        </>
    );
}

export default App;
