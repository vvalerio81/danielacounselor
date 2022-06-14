// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAWXmkyghoMxg12Pkt7CWJMVSZKhfHB-A",
  authDomain: "danielacounselor-66bf1.firebaseapp.com",
  projectId: "danielacounselor-66bf1",
  storageBucket: "danielacounselor-66bf1.appspot.com",
  messagingSenderId: "903676065527",
  appId: "1:903676065527:web:d29984af9c548f0edd05f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;