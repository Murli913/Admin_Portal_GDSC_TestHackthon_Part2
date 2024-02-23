// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgNe8aV6-EdMtFfEZs96Ljp9LHSSDvRA8",
  authDomain: "complaints-1b9a9.firebaseapp.com",
  projectId: "complaints-1b9a9",
  storageBucket: "complaints-1b9a9.appspot.com",
  messagingSenderId: "492042939484",
  appId: "1:492042939484:web:8d30d4f1e6c0912b97ca99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}