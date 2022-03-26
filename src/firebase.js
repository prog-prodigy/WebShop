import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyD8TzB_EhKv6wIPZydcqjiyRLqD1w4NW8A",
    authDomain: "react-http-561b5.firebaseapp.com",
    databaseURL: "https://react-http-561b5-default-rtdb.firebaseio.com",
    projectId: "react-http-561b5",
    storageBucket: "react-http-561b5.appspot.com",
    messagingSenderId: "1094618164363",
    appId: "1:1094618164363:web:aace519b42058292f9388e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const authfirebase= getAuth(app)
  export default app