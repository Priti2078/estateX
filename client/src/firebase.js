// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "estatex-6aed5.firebaseapp.com",
  projectId: "estatex-6aed5",
  storageBucket: "estatex-6aed5.appspot.com",
  messagingSenderId: "1086263303329",
  appId: "1:1086263303329:web:5f1cf80de410112bcee4e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);