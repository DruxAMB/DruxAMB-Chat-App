// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACq2PwCiwxDnyx4hgMaz8LjrFLaSDoiSM",
  authDomain: "druxamb-chat-app.firebaseapp.com",
  projectId: "druxamb-chat-app",
  storageBucket: "druxamb-chat-app.appspot.com",
  messagingSenderId: "984191713016",
  appId: "1:984191713016:web:cf328fe077797f9712450d",
  measurementId: "G-27PQVJQGGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);