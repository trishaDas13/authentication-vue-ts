// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBR4mtNmDhLurT4DAoJRYr4WMe_VU-u-MM",
  authDomain: "login-page-with-vue-and-ts.firebaseapp.com",
  projectId: "login-page-with-vue-and-ts",
  storageBucket: "login-page-with-vue-and-ts.appspot.com",
  messagingSenderId: "60085525724",
  appId: "1:60085525724:web:34ea53f697daf74670a819"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
