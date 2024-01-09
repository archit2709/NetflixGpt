// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqkkxZlR08shLAPrVQRKlJACIUPFUtK_4",
  authDomain: "netflix-gpt-30491.firebaseapp.com",
  projectId: "netflix-gpt-30491",
  storageBucket: "netflix-gpt-30491.appspot.com",
  messagingSenderId: "656603354438",
  appId: "1:656603354438:web:999e950d7d136681a24147",
  measurementId: "G-5G63DFG9L7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
