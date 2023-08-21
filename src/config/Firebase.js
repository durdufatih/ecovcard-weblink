// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQqNdKGlxeyXLS2HhUX9CoEXo4wSPWD_M",
  authDomain: "ecovcard-93a11.firebaseapp.com",
  projectId: "ecovcard-93a11",
  storageBucket: "ecovcard-93a11.appspot.com",
  messagingSenderId: "730959583239",
  appId: "1:730959583239:web:545f14a2e845e6932872a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);