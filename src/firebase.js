// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWjihzDOpfbWZ89x1s03uL33bsSszGAhk",
  authDomain: "habitsuperhero.firebaseapp.com",
  projectId: "habitsuperhero",
  storageBucket: "habitsuperhero.firebasestorage.app",
  messagingSenderId: "284712912530",
  appId: "1:284712912530:web:ef1f726a5b574a32de084b",
  measurementId: "G-YX4719NLWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);