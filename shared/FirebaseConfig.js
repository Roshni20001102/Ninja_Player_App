// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBihZoom4wVdSd4mf2IwaGMnIrkEyfqMCI",
  authDomain: "fullstack-a18ea.firebaseapp.com",
  projectId: "fullstack-a18ea",
  storageBucket: "fullstack-a18ea.appspot.com",
  messagingSenderId: "531770193278",
  appId: "1:531770193278:web:33a9512193b538fc992f2f",
  measurementId: "G-J9S0MLKYBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

//const analytics = getAnalytics(app);
