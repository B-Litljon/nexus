// src/firebaseConfig.ts

// Import the functions and types you need from the SDKs
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Example: import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAzosQiBoJg0yC3xJ_OGXdMcQHOVEg0fw", // Replace with your actual apiKey if different
  authDomain: "nexus-f1efd.firebaseapp.com",
  projectId: "nexus-f1efd",
  storageBucket: "nexus-f1efd.firebasestorage.app", // Corrected from firebasestorage.app
  messagingSenderId: "915941001056",
  appId: "1:915941001056:web:769accd5ed984e6a934005",
  measurementId: "G-MM88FCL49M" // Optional
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics: Analytics = getAnalytics(app);

// Initialize Firestore Database
const db: Firestore = getFirestore(app);

// Initialize other services here if needed (e.g., Authentication)
// const auth: Auth = getAuth(app);

// Export the initialized services so you can import them elsewhere
export { app, db, analytics };
// If using Auth, export it too: export { app, db, analytics, auth };