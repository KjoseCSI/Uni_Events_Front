// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";


import { API_KEY, AUTH_DOMAIN, 
    PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID,
    APP_ID, MEASUREMENT_ID, CLOUDMESSAGE
 } from "@env";
import { getAuth } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getReactNativePersistence, iniatializaAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(appFirebase); */

/* export const auth = iniatializaAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});  */
export const auth = getAuth(app);



export const db = getFirestore(app);


export const messaging = getMessaging(app);

getToken(messaging, {vapidKey: CLOUDMESSAGE});

/* 
export const usersRef = collection(db,'users');
export const roomRef = collection(db,'room'); */
