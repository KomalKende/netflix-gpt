// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuToip_-68tAGaNHqwjYX1okrQTnSOi8s",
  authDomain: "netflixgpt-e4379.firebaseapp.com",
  projectId: "netflixgpt-e4379",
  storageBucket: "netflixgpt-e4379.firebasestorage.app",
  messagingSenderId: "366015105222",
  appId: "1:366015105222:web:2fef802ffd4110f2ad2fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();