// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6KZr5iDqsJ_ILJsJNwcHce6IItDjll2E",
  authDomain: "food-delivery-vu.firebaseapp.com",
  projectId: "food-delivery-vu",
  storageBucket: "food-delivery-vu.appspot.com",
  messagingSenderId: "874191352706",
  appId: "1:874191352706:web:c900028ca9df040d90559b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);