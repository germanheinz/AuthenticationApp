// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUg6fK0bSt40cya5UKjgJt82kopQPLdqY",
  authDomain: "react-auth-f20f2.firebaseapp.com",
  databaseURL: "https://react-auth-f20f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-auth-f20f2",
  storageBucket: "react-auth-f20f2.appspot.com",
  messagingSenderId: "982703667742",
  appId: "1:982703667742:web:a56f1087686ae724104c0f"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB   = getFirestore(firebaseApp);