// src/firebase.js
// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


import { getAuth, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrMQ6-jjemLjUiMOmh8HpgkmzqKQKmtYU',
  authDomain: 'newsapp-e80fb.firebaseapp.com',
  projectId: 'newsapp-e80fb',
  storageBucket: 'newsapp-e80fb.appspot.com',
  messagingSenderId: '898703811064',
  appId: '1:898703811064:web:7039bef57d7cedb08cf60d',
  // Your Firebase config here
};

// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, GoogleAuthProvider  };
