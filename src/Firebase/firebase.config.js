// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaNI7-BZpJDitWfrqP7dUzYisUU7kS40g",
  authDomain: "luxuary-real-state.firebaseapp.com",
  projectId: "luxuary-real-state",
  storageBucket: "luxuary-real-state.appspot.com",
  messagingSenderId: "1072645351693",
  appId: "1:1072645351693:web:8418d23c2ce7fef5022844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;