// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlz7ExszOgpVQ74ooRmBPQIaVQ16KZYg",
  authDomain: "discount-pro-6bcd3.firebaseapp.com",
  projectId: "discount-pro-6bcd3",
  storageBucket: "discount-pro-6bcd3.firebasestorage.app",
  messagingSenderId: "232538922952",
  appId: "1:232538922952:web:f67dcc9c3c45625ecaeafd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);