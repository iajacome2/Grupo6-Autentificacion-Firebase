// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF-WLExzRdkdv2jmI4BGQx-PxWWR6U6Fs",
  authDomain: "context-api-574ce.firebaseapp.com",
  projectId: "context-api-574ce",
  storageBucket: "context-api-574ce.appspot.com",
  messagingSenderId: "887839424582",
  appId: "1:887839424582:web:8ba745f78ed7d65f048a47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);