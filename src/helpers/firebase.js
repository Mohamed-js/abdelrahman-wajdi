import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADW2oJtwV2Lh5XnwkzHgmRi7JEMWflFuQ",
  authDomain: "abdo-portfolio-88e3f.firebaseapp.com",
  projectId: "abdo-portfolio-88e3f",
  storageBucket: "abdo-portfolio-88e3f.firebasestorage.app",
  messagingSenderId: "938613129893",
  appId: "1:938613129893:web:764bf27907462eff5e834c",
  measurementId: "G-67D9HVW9Y2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

//  sign in .. => go to console
// web
// settings of the web you added

// build => fire base data base

// allow read and write => data base  => rules => allow read, write, delete: if true;
