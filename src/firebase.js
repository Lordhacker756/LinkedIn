import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBnP1fNv9VK68Fg7azD5h8BeA3HWT2VCHY",
    authDomain: "react-redux-linkedin.firebaseapp.com",
    projectId: "react-redux-linkedin",
    storageBucket: "react-redux-linkedin.appspot.com",
    messagingSenderId: "259945336473",
    appId: "1:259945336473:web:53200bcb8abf7f3847b208"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()


export {db};