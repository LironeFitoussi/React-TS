// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM9Fu811T1uflvIGlnPgl4dJTwTmTCfMk",
  authDomain: "react-timer-mini-app.firebaseapp.com",
  projectId: "react-timer-mini-app",
  storageBucket: "react-timer-mini-app.appspot.com",
  messagingSenderId: "765811862437",
  appId: "1:765811862437:web:78b68289a0dd336fe5164c",
  measurementId: "G-HFSSMNN2CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
