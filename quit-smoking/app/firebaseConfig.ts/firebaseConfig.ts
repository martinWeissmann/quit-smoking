// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0FI9JuytqRzGYRQjIdxNyD2oiMJJViI",
  authDomain: "proa-16d0b.firebaseapp.com",
  projectId: "proa-16d0b",
  storageBucket: "proa-16d0b.firebasestorage.app",
  messagingSenderId: "656436986435",
  appId: "1:656436986435:web:42b8e9bd729ae774e9caf6",
  measurementId: "G-VJBHM6Z2HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);