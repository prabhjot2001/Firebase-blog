// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "", // add your api key here
  authDomain: "blog-rush.firebaseapp.com",
  projectId: "blog-rush",
  storageBucket: "blog-rush.appspot.com",
  messagingSenderId: "525464607179",
  appId: "1:525464607179:web:79acad90593ae58f75fe4e",
  measurementId: "G-DT6KH9Y360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth();
export const authProvider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);