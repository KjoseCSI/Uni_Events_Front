// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIyy5P0dSPhcbjcmfClBpLb_zJnxQvV_o",
  authDomain: "unieventsapp.firebaseapp.com",
  projectId: "unieventsapp",
  storageBucket: "unieventsapp.firebasestorage.app",
  messagingSenderId: "852287569659",
  appId: "1:852287569659:web:833d2f7f41c807b6f7ba5e",
  measurementId: "G-DJ5Y076QP6"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;