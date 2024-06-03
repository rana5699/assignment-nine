import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDqEF8PMMRrmZ5INs15VY1a5qCXtf3rTjM",
  authDomain: "assinment-nine-auth.firebaseapp.com",
  projectId: "assinment-nine-auth",
  storageBucket: "assinment-nine-auth.appspot.com",
  messagingSenderId: "658650209261",
  appId: "1:658650209261:web:ecebfb13cf767c668b65e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
