// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0CoxPX5QEWFyLDUiAX5gh07F-kDGZ5M",
  authDomain: "proyecto-lista-tareas-fi-da5eb.firebaseapp.com",
  projectId: "proyecto-lista-tareas-fi-da5eb",
  storageBucket: "proyecto-lista-tareas-fi-da5eb.appspot.com",
  messagingSenderId: "878875248666",
  appId: "1:878875248666:web:b36837bd6f8b34998929a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export{db};