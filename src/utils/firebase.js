// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC6m959DMzHdbe4aiOgFX99v61axcGhGE",
  authDomain: "netflixgpt-ae207.firebaseapp.com",
  projectId: "netflixgpt-ae207",
  storageBucket: "netflixgpt-ae207.firebasestorage.app",
  messagingSenderId: "548253509036",
  appId: "1:548253509036:web:e99ec2b33d191ce7d40609",
  measurementId: "G-0XRKSEF7ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);