// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_IMdfpcS-UoL3DjNgSWqmFZEMD-jjPp8",
  authDomain: "bigbrothermakeline.firebaseapp.com",
  projectId: "bigbrothermakeline",
  storageBucket: "bigbrothermakeline.appspot.com",
  messagingSenderId: "610709002894",
  appId: "1:610709002894:web:4fc2aafab491104dc207df",
  measurementId: "G-3XF0L25EX6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
const analytics = getAnalytics(app);
