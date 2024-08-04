// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-3bb71.firebaseapp.com",
  projectId: "estate-3bb71",
  storageBucket: "estate-3bb71.appspot.com",
  messagingSenderId: "433750432521",
  appId: "1:433750432521:web:860dbf448ee9323b59d1d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
