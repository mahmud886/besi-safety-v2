import React, { useContext, useEffect, useState } from 'react';

import './Login.css';
import Logo from '../../assets/images/logo.png';
import * as firebase from 'firebase/app';

import fire from '../../fire';

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Elearning from '../Home/Pages/Elearning/Elearning';

const Login = () => {
    const [loggedInUser, setLloggedInUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: '/' } };

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    // if (firebase.length === 0) {
    //     firebase(fire);
    // }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        clearErrors();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email } = result.user;
                const signInUser = { email: email, password: password };
                setLloggedInUser(signInUser);
                setUser(signInUser);
                console.log(signInUser);
                history.replace(from);
            })
            .catch((err) => {
                // eslint-disable-next-line default-case
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        clearErrors();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                alert(`&{result.user.email} created successfully`);
            })
            .catch((err) => {
                // eslint-disable-next-line default-case
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then((result) => {
                console.log('Logout Successfully');
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    }, []);

    return (
        <>
            <div>
                <div className='login-main-container'>
                    <div className='login-container rounded shadow-lg '>
                        <form className='m-5 text-center '>
                            <img src={Logo} alt='' width='70px' height='auto' />
                            <h5 className='py-3'>Sign In</h5>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='email'
                                    autoFocus
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p>{emailError}</p>
                            </div>

                            <div className='form-group pt-2'>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='password'
                                    value={password}
                                    required
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <p>{passwordError}</p>
                            </div>
                            <div className=''>
                                <button
                                    onClick={handleLogin}
                                    type='submit'
                                    className='btn btn-main'>
                                    Sign in
                                </button>
                                <div className='pt-2'>
                                    <p>Dont have an account?</p>
                                    <p>Please Contact with administrator</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

{
    /* <div className='d-grid'>
                                {hasAccount ? (
                                    <>
                                        <button
                                            onClick={handleLogin}
                                            type='submit'
                                            className='btn btn-main'>
                                            Sign in
                                        </button>
                                        <p>Dont have an account?</p>
                                        <span
                                            className='error-message'
                                            onClick={() =>
                                                setHasAccount(!hasAccount)
                                            }>
                                            Sign up
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={handleSignUp}
                                            type='submit'
                                            className='btn btn-main'>
                                            Sign up
                                        </button>
                                        <p>Dont have an account? </p>
                                        <span
                                            className='error-message'
                                            onClick={() =>
                                                setHasAccount(!hasAccount)
                                            }>
                                            Sign in
                                        </span>
                                    </>
                                )}
                            </div> */
}
