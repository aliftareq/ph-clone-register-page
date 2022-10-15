// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqwZGm1jGG7ORgUbb94ERwaykA6cESung",
    authDomain: "ph-clone-authentication.firebaseapp.com",
    projectId: "ph-clone-authentication",
    storageBucket: "ph-clone-authentication.appspot.com",
    messagingSenderId: "201799395164",
    appId: "1:201799395164:web:5e0627e46fc0d616054399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;