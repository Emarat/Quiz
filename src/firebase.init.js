import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyATmo998SamrgBeYBT4RqpbmafJZw0kIno",
    authDomain: "quiz-fb605.firebaseapp.com",
    databaseURL: "https://quiz-fb605-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quiz-fb605",
    storageBucket: "quiz-fb605.appspot.com",
    messagingSenderId: "318940765218",
    appId: "1:318940765218:web:016d8fecc19aaa9aefbe7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;