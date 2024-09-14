// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd67_0Kgo49H0On1N4FmgxTHWd8Yx18GY",
  authDomain: "foodcai-c83e9.firebaseapp.com",
  projectId: "foodcai-c83e9",
  storageBucket: "foodcai-c83e9.appspot.com",
  messagingSenderId: "756684295285",
  appId: "1:756684295285:web:0c3d4e0fa99a441b92fc3c",
  measurementId: "G-Y15GD00PN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
