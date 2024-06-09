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




  //  sign in .. => go to console
  // web 
  // settings of the web you added 

  // build => fire base data base


  // allow read and write => data base  => rules => allow read, write, delete: if true;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };