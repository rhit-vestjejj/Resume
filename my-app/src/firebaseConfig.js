// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCMKaoZTwymsWG_JDKEjlvstfaglWFm_s",
  authDomain: "portfolio-a9b22.firebaseapp.com",
  projectId: "portfolio-a9b22",
  storageBucket: "portfolio-a9b22.firebasestorage.app",
  messagingSenderId: "650315949706",
  appId: "1:650315949706:web:abca08decde4d4071aaf73",
  measurementId: "G-L3W0CP3H8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getAnalytics(app);

export { db };
