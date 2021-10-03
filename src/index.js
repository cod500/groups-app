import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebaseConfig = {
  apiKey: "AIzaSyAciOXX941dQyrI2n-Le6_UogNuipUQauM",
  authDomain: "members-groups.firebaseapp.com",
  projectId: "members-groups",
  storageBucket: "members-groups.appspot.com",
  messagingSenderId: "414752516127",
  appId: "1:414752516127:web:79bef074d81d8e05b6cd2a",
  measurementId: "G-FPXBCN8YPS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
