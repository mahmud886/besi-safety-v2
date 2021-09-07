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

export let apiEndpointV1 = 'https://besi-bd.herokuapp.com/api/v1';
export let apiEndpointV2 = 'https://besi-bd.herokuapp.com/api/v2';

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <SocialBar />
                <Switch>
                    <Route exact path='/'>
                        <Homepage />
                    </Route>

                    <Route exact path='/payment'>
                        <PaymentForm />
                    </Route>
                    <Route exact path='/payment/successful'>
                        <SuccessPage />
                    </Route>

                    <Route exact path='/payment/failed'>
                        <FailurePage />
                    </Route>

                    <Route exact path='/payment/cancelled'>
                        <CancelledPage />
                    </Route>

                    <Route exact path='/courses'>
                        <Courses />
                    </Route>

                    {/* <Route exact path='/courses/nebosh'>
                        <Nebosh />
                    </Route> */}
                    <Route exact path='/courses/ioshms'>
                        <IoshMs />
                    </Route>
                    <Route exact path='/courses/iso1'>
                        <Iso1 />
                    </Route>
                    <Route exact path='/courses/iso2'>
                        <Iso2 />
                    </Route>
                    <Route exact path='/courses/iso3'>
                        <Iso3 />
                    </Route>
                    <Route exact path='/courses/othm'>
                        <Othm />
                    </Route>
                    <Route exact path='/courses/aosh'>
                        <Aosh />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>

                    <Route path='/calendar'>
                        <Calendar />
                    </Route>
                    <Route path='/Result'>
                        <Result />
                    </Route>

                    <Route path='/elearning'>
                        <Elearning />
                    </Route>

                    <Route path='/blog'>
                        <Blog />
                    </Route>
                    <Route path='/blog-details/:id'>
                        <BlogDetails />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>

                    <Route path='/admission-form'>
                        <MainForm />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
