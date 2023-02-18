import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBINWPUR1e0YJucC5SbfCojMQQT9dEQcm4",

  authDomain: "librarymanager-398ad.firebaseapp.com",

  projectId: "librarymanager-398ad",

  storageBucket: "librarymanager-398ad.appspot.com",

  messagingSenderId: "24756451840",

  appId: "1:24756451840:web:ab5fc85a6d891af7e936e5",

  measurementId: "G-EXFR43QTXE"

};

initializeApp(firebaseConfig);
export const auth = getAuth();
