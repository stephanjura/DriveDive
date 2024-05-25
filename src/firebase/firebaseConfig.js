// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMe0gzLAu7CJb5N3RW83eZhDuOEIOWyYA", 
  authDomain: "drivedive-cca94.firebaseapp.com",
  projectId: "drivedive-cca94",
  storageBucket: "drivedive-cca94.appspot.com",
  messagingSenderId: "827799328696",
  appId: "1:827799328696:web:1bc5bb4ac4a62757faa14d",
  measurementId: "G-KEW6WRKEWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics, firebaseConfig };
