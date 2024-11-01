import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC-5pfrk-fXpWUMYlhDs1pSuuhjG-H-xbo",
  authDomain: "dentistapp-b3f6d.firebaseapp.com",
  projectId: "dentistapp-b3f6d",
  storageBucket: "dentistapp-b3f6d.appspot.com",
  messagingSenderId: "721217302605",
  appId: "1:721217302605:web:1e10ffcb7b698f06262c04",
  measurementId: "G-TFZPMKBJX6",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
