// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFDXvidt6BdugS1oP3vHvLYEkx5-65_V4",
  authDomain: "angular-app-92599.firebaseapp.com",
  databaseURL: "https://angular-app-92599-default-rtdb.firebaseio.com",
  projectId: "angular-app-92599",
  storageBucket: "angular-app-92599.appspot.com",
  messagingSenderId: "366229960919",
  appId: "1:366229960919:web:77576a35c59ffc55aa1892",
  measurementId: "G-MTGCDY5CW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);