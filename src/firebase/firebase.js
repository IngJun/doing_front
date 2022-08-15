// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFodmMt8shbnZF4hKnGl88dFArJqg3_AM",
  authDomain: "ipost-28ad7.firebaseapp.com",
  projectId: "ipost-28ad7",
  storageBucket: "ipost-28ad7.appspot.com",
  messagingSenderId: "619513028621",
  appId: "1:619513028621:web:a2a4cf629e9a850346b544",
  measurementId: "G-ZRYJHW1ZXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);