// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2A8_TrGYuAr6LOq40i8DHSvREJLV21YI",
  authDomain: "quitsmoking-9ab0f.firebaseapp.com",
  projectId: "quitsmoking-9ab0f",
  storageBucket: "quitsmoking-9ab0f.firebasestorage.app",
  messagingSenderId: "378840311975",
  appId: "1:378840311975:web:7181bb9f0d16bcc3c35382",
  measurementId: "G-DMZ87CZEME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

// Crear un proveedor para Google
const provider = new GoogleAuthProvider();

export { auth, provider };