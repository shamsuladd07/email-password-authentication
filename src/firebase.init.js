// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNDHSGJNcwVapDbSK8w41XHU9wDcEjqN8",
    authDomain: "email-password-auth-b0dea.firebaseapp.com",
    projectId: "email-password-auth-b0dea",
    storageBucket: "email-password-auth-b0dea.appspot.com",
    messagingSenderId: "289345649579",
    appId: "1:289345649579:web:44e33e238f9222595230ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;