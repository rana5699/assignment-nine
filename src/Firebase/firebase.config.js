// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDqEF8PMMRrmZ5INs15VY1a5qCXtf3rTjM",
  authDomain: "assinment-nine-auth.firebaseapp.com",
  projectId: "assinment-nine-auth",
  storageBucket: "assinment-nine-auth.appspot.com",
  messagingSenderId: "658650209261",
  appId: "1:658650209261:web:ecebfb13cf767c668b65e4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
