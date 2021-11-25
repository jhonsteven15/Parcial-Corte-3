// Import the functions you need from the SDKs you need
/*import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
*///import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBKVpQf6kOWEhbpP6l9n0_nNdU-PwVFO9s",
  authDomain: "instragram-react.firebaseapp.com",
  projectId: "instragram-react",
  storageBucket: "instragram-react.appspot.com",
  messagingSenderId: "1071867490410",
  appId: "1:1071867490410:web:c5afbc2de843d60e26da13"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


export {firebase};
