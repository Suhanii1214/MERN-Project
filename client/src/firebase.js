// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-ba00b.firebaseapp.com",
  projectId: "mern-project-ba00b",
  storageBucket: "mern-project-ba00b.appspot.com",
  messagingSenderId: "988578388882",
  appId: "1:988578388882:web:bc63bc7cf0b4dc54e97f4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);