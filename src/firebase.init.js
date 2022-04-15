// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLNcAYVz3XC73Txei6bB5-cZ_ghS7Rnac",
  authDomain: "genius-car-services-c8a84.firebaseapp.com",
  projectId: "genius-car-services-c8a84",
  storageBucket: "genius-car-services-c8a84.appspot.com",
  messagingSenderId: "910434369080",
  appId: "1:910434369080:web:b6c9732e2d958edcc3b0cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
