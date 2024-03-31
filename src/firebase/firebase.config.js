// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFDBZqAVYQI-zqcRJM2mMF-UnoBSpaqoI",
  authDomain: "form-email-password-7db45.firebaseapp.com",
  projectId: "form-email-password-7db45",
  storageBucket: "form-email-password-7db45.appspot.com",
  messagingSenderId: "437483057417",
  appId: "1:437483057417:web:1f39e307b4763d20f5e3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;