// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getReactNativePersistence, iniatializaAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm-0kQGCMUPYMZyFssgY4oOxLjl0pT1GM",
  authDomain: "unievents-89d0b.firebaseapp.com",
  projectId: "unievents-89d0b",
  storageBucket: "unievents-89d0b.firebasestorage.app",
  messagingSenderId: "80148258409",
  appId: "1:80148258409:web:9d2cc06bce3b6fcc96ccf8",
  measurementId: "G-EX3Z974PQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = iniatializaAuth(app,{
    persistence: getReactNativePersistence()
});

export const db = getFirestore(app);

export const usersRef = collection(db,'users');
export const roomRef = collection(db,'room');
