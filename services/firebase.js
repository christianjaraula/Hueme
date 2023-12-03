// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClg1a3cF3zBdnmRmu_O-v7GJe__c1dYkE",
  authDomain: "fir-hueme.firebaseapp.com",
  databaseURL: "https://fir-hueme-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-hueme",
  storageBucket: "fir-hueme.appspot.com",
  messagingSenderId: "300551497520",
  appId: "1:300551497520:web:76b28ab3ae0170d8dd0af5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore DB
export const db = getFirestore(app);

// Firebase Storage
export const storage = getStorage(app);