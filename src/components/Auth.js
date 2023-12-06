// src/components/Auth.js
import React, { useEffect } from 'react';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';

const Auth = () => {
    useEffect(() => {
      // Set up an observer to watch for changes in the user's login state
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('User is signed in:', user);
        } else {
          console.log('User is signed out');
        }
      });
  
      // Clean up the observer when the component unmounts
      return () => unsubscribe();
    }, []); // Only run the effect once, when the component mounts
  
    const signIn = async () => {
      try {
        const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider from firebase/auth
        await auth.signIn (provider);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };
  
    const signOut = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  
    return (
      <div>
        <button onClick={signIn}>Sign In with Google</button>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  };
  
  export default Auth;