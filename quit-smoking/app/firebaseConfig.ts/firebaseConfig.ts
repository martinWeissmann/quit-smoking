// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBx0FI9JuytqRzGYRQjIdxNyD2oiMJJViI",
    authDomain: "proa-16d0b.firebaseapp.com",
    projectId: "proa-16d0b",
    storageBucket: "proa-16d0b.firebasestorage.app",
    messagingSenderId: "656436986435",
    appId: "1:656436986435:web:42b8e9bd729ae774e9caf6",
    measurementId: "G-VJBHM6Z2HD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
