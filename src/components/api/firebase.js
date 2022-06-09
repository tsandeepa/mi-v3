// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI410XZfVCuAYrWUfltk9WrqdcIoIXRl4",
    authDomain: "mint-v3.firebaseapp.com",
    databaseURL: "https://mint-v3-default-rtdb.firebaseio.com",
    projectId: "mint-v3",
    storageBucket: "mint-v3.appspot.com",
    messagingSenderId: "1010862814975",
    appId: "1:1010862814975:web:11d50f9dbf3e13281e3eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)