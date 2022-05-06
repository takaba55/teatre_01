// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCWJ7u_AQwEUFPhrniH7M-iKI_6gUP6lwE",
  authDomain: "teatre-9eb74.firebaseapp.com",
  databaseURL: "https://teatre-9eb74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teatre-9eb74",
  storageBucket: "teatre-9eb74.appspot.com",
  messagingSenderId: "456421445397",
  appId: "1:456421445397:web:3c756eaa1abfdc7aa7231c",
  measurementId: "G-YG72825MV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);