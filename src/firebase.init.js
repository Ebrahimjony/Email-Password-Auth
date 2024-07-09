// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqa9U-lUFVgoWQ31KDAmvSj1uEoo_eStc",
  authDomain: "email-password-system.firebaseapp.com",
  projectId: "email-password-system",
  storageBucket: "email-password-system.appspot.com",
  messagingSenderId: "718787376422",
  appId: "1:718787376422:web:b45bae205a44584600fde7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;