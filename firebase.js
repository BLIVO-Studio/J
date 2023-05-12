// firebase.js 파일
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWoYsufucobVb292hAj3S4HyJYfcYvEV0",
  authDomain: "data-462f4.firebaseapp.com",
  databaseURL: "https://data-462f4-default-rtdb.firebaseio.com",
  projectId: "data-462f4",
  storageBucket: "data-462f4.appspot.com",
  messagingSenderId: "255199382791",
  appId: "1:255199382791:web:93e13f21ae54b93600c9a2",
  measurementId: "G-F7VKLLGK59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
