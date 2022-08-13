// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYXz5VfKenBtZfoVIGTosX0hL-1Hx72U",
  authDomain: "crwn-clothing-db-50621.firebaseapp.com",
  projectId: "crwn-clothing-db-50621",
  storageBucket: "crwn-clothing-db-50621.appspot.com",
  messagingSenderId: "964789449815",
  appId: "1:964789449815:web:aa755697c1492d42391f12"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);