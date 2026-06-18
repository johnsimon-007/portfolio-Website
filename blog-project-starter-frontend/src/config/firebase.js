import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBDLKDXCwUU--Ed3wuh-axNfzJ14_u1-ww",
  authDomain: "blog-app-90dfd.firebaseapp.com",
  projectId: "blog-app-90dfd",
  storageBucket: "blog-app-90dfd.firebasestorage.app",
  messagingSenderId: "111298710687",
  appId: "1:111298710687:web:492dd8c37d65aec8dae6aa",
  measurementId: "G-RW0ZY4D4PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth