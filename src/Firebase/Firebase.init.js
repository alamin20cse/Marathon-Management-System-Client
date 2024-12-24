// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAGwJjUdPV2X5NROu-Bc3ePDcOuN3Qs3g",
  authDomain: "marathon-management-syst-7b404.firebaseapp.com",
  projectId: "marathon-management-syst-7b404",
  storageBucket: "marathon-management-syst-7b404.firebasestorage.app",
  messagingSenderId: "787713994450",
  appId: "1:787713994450:web:a6de2ce6b547387a4bc70b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);