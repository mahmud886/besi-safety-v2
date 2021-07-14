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
import Nebosh from './components/Home/Pages/Courses/CourseDetails/Nebosh';
import IoshMs from './components/Home/Pages/Courses/CourseDetails/IoshMs';
import Iso1 from './components/Home/Pages/Courses/CourseDetails/Iso1';
import Iso2 from './components/Home/Pages/Courses/CourseDetails/Iso2';
import Iso3 from './components/Home/Pages/Courses/CourseDetails/Iso3';
import Othm from './components/Home/Pages/Courses/CourseDetails/Othm';
import Aosh from './components/Home/Pages/Courses/CourseDetails/Aosh';

import MainForm from './components/Home/UpcomingBatch/MainForm';
import BlogDetails from './components/Home/Pages/Blog/BlogDetails';

export let apiEndpoint = 'https://besi-bd.herokuapp.com/api/v1';

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>

                    <Route path='/courses'>
                        <Courses />
                    </Route>

                    <Route path='/calendar'>
                        <Calendar />
                    </Route>
                    <Route path='/Result'>
                        <Result />
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

                    <Route path='/nebosh'>
                        <Nebosh />
                    </Route>
                    <Route path='/ioshms'>
                        <IoshMs />
                    </Route>
                    <Route path='/iso1'>
                        <Iso1 />
                    </Route>
                    <Route path='/iso2'>
                        <Iso2 />
                    </Route>
                    <Route path='/iso3'>
                        <Iso3 />
                    </Route>
                    <Route path='/othm'>
                        <Othm />
                    </Route>
                    <Route path='/aosh'>
                        <Aosh />
                    </Route>

                    <Route path='/admission-form'>
                        <MainForm />
                    </Route>

                    <Route path='/'>
                        <Homepage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
