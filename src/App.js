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
                    <Route path='/' exact component={Homepage} />
                    <Route path='/payment' exact component={PaymentForm} />
                    <Route path='/payment/successful' components={SuccessPage} />
                    <Route path='/payment/failed' component={FailurePage} />
                    <Route path='/payment/cancelled' component={CancelledPage} />
                    <Route path='/courses' exact component={Courses} />
                    <Route path='/courses/ioshms' component={IoshMs} />
                    <Route path='/courses/iso1' component={Iso1} />
                    <Route path='/courses/iso2' component={Iso2} />
                    <Route path='/courses/iso2' component={Iso3} />
                    <Route path='/courses/othm' component={Othm} />
                    <Route path='/courses/aosh' component={Aosh} />
                    <Route path='/about' component={About} />
                    <Route path='/calendar' component={Calendar} />
                    <Route path='/result' component={Result} />
                    <Route path='/elearning' component={Elearning} />
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/blog/:id' component={BlogDetails} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/admission-form' component={MainForm} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
