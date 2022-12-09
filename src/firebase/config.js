// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNIY3xNg_5B90W3n3v3qWjUKxsiAv_WJ0",
    authDomain: "cooking-recipe-1.firebaseapp.com",
    projectId: "cooking-recipe-1",
    storageBucket: "cooking-recipe-1.appspot.com",
    messagingSenderId: "487934003711",
    appId: "1:487934003711:web:589cd589db78e23663bfca",
    measurementId: "G-KQNT4WDJ53"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export {projectFirestore}