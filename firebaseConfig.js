// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { API_KEY, AUTH_DOMAIN, 
    PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID,
    APP_ID, MEASUREMENT_ID
 } from "@env";
import { getAuth } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getReactNativePersistence, iniatializaAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY ,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(appFirebase); */

/* export const auth = iniatializaAuth(app,{
    persistence: getReactNativePersistence()
}); */
export const auth = getAuth(appFirebase);

export const db = getFirestore(appFirebase);


/* 
export const usersRef = collection(db,'users');
export const roomRef = collection(db,'room'); */
