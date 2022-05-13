// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3Mld9DsxpH4GCsQUoD8lrf_0-ZYHbBbs",
    authDomain: "todoapp-ef13d.firebaseapp.com",
    projectId: "todoapp-ef13d",
    storageBucket: "todoapp-ef13d.appspot.com",
    messagingSenderId: "662550019268",
    appId: "1:662550019268:web:7eaaea2db4521a528bdd91",
    measurementId: "G-M7EB92M78J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);