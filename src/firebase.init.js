// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATmo998SamrgBeYBT4RqpbmafJZw0kIno",
    authDomain: "quiz-fb605.firebaseapp.com",
    projectId: "quiz-fb605",
    storageBucket: "quiz-fb605.appspot.com",
    messagingSenderId: "318940765218",
    appId: "1:318940765218:web:016d8fecc19aaa9aefbe7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;