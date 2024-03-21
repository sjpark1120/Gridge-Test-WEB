// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjAJffq9DgyPHFLMHczAdMEe9eGeo39Q",
  authDomain: "gridgetest-2a0c6.firebaseapp.com",
  projectId: "gridgetest-2a0c6",
  storageBucket: "gridgetest-2a0c6.appspot.com",
  messagingSenderId: "909200438729",
  appId: "1:909200438729:web:a750e4fd8e4de71153a418",
  measurementId: "G-QQ66JRJ1V3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
