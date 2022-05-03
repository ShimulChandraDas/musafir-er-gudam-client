// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtMwBCVLjwPd7CjRCXrWDQCYSgJArS_Hc",
    authDomain: "musafir-er-gudam.firebaseapp.com",
    projectId: "musafir-er-gudam",
    storageBucket: "musafir-er-gudam.appspot.com",
    messagingSenderId: "405555385599",
    appId: "1:405555385599:web:52803764a44ed18e0fe8ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;