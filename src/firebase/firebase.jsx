import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,
signInWithEmailAndPassword, onAuthStateChanged,  } from "firebase/auth";
import {  getDatabase,ref ,set,child, get,onValue } 
from  "firebase/database";
import { getStorage, uploadBytesResumable, getDownloadURL,ref as sRef } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAHrh6segeM6dgjY26lKfU2B58D-PCVWQ",
  authDomain: "yumyard-e-commerce.firebaseapp.com",
  databaseURL: "https://yumyard-e-commerce-default-rtdb.firebaseio.com",
  projectId: "yumyard-e-commerce",
  storageBucket: "yumyard-e-commerce.appspot.com",
  messagingSenderId: "1046575436430",
  appId: "1:1046575436430:web:9c00390cdd42330ef72fdf",
  measurementId: "G-29D2YKQQDT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app)
export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    ref,
    set,
    child,
    get,
    getDatabase,
    storage,
    uploadBytesResumable,
    getDownloadURL,
    sRef,
    onValue,

}