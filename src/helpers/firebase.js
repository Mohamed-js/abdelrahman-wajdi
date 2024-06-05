import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPgfgobxvUDLk0t3lkBTSMgNcvNIQumwg",
    authDomain: "ads-master-aa303.firebaseapp.com",
    projectId: "ads-master-aa303",
    storageBucket: "ads-master-aa303.appspot.com",
    messagingSenderId: "237914002630",
    appId: "1:237914002630:web:0072b2547dd9fa516533c7",
    measurementId: "G-9GDJBTVQKR"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };