// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHc4hbfrA488d1npekJWY1iKDyc_2IXjs",
  authDomain: "livinglab-hackathon.firebaseapp.com",
  projectId: "livinglab-hackathon",
  storageBucket: "livinglab-hackathon.appspot.com",
  messagingSenderId: "739236482073",
  appId: "1:739236482073:web:92f0b83ff96a6539916e88",
  measurementId: "G-3EZD98SCKS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firebase.initializeApp(firebaseConfig);
