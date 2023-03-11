import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtajPhMDtrkjysNM9E-rS3MJqT7YyU-w",
  authDomain: "auth-product-1a2e7.firebaseapp.com",
  projectId: "auth-product-1a2e7",
  storageBucket: "auth-product-1a2e7.appspot.com",
  messagingSenderId: "495719926139",
  appId: "1:495719926139:web:e13563d5b1f29190f2d5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };