// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCtOmezooVRLQF3KuWbiD4G5XglnNBj-Mk',
    authDomain: 'besi-user-login.firebaseapp.com',
    projectId: 'besi-user-login',
    storageBucket: 'besi-user-login.appspot.com',
    messagingSenderId: '586225517286',
    appId: '1:586225517286:web:bbe2a733ac3dd4a6ce3127',
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;
