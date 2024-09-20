// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4uIX9r0-8FIf-b6_i6UnRkFwsbkmgGzQ",
  authDomain: "gerenciador-de-orcamentos.firebaseapp.com",
  projectId: "gerenciador-de-orcamentos",
  storageBucket: "gerenciador-de-orcamentos.appspot.com",
  messagingSenderId: "772679274091",
  appId: "1:772679274091:web:dc97ecc9c1b46815e2ab2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
