// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOEELr8MeueOSS1WyJX5_CkjCBMU1CjuU",
  authDomain: "achewalebhaiya-8ea02.firebaseapp.com",
  projectId: "achewalebhaiya-8ea02",
  storageBucket: "achewalebhaiya-8ea02.appspot.com",
  messagingSenderId: "803953226016",
  appId: "1:803953226016:web:8fd1a398a1d02bf109e745",
  measurementId: "G-V050YEBNEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

export { app, auth };
