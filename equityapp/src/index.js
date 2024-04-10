import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyjo0HmQJ8ounI-EtCFOJiMQbuRN8cgJ8",
  authDomain: "equitylink-6ec67.firebaseapp.com",
  projectId: "equitylink-6ec67",
  storageBucket: "equitylink-6ec67.appspot.com",
  messagingSenderId: "652554190875",
  appId: "1:652554190875:web:11a302e29e81d27fb338be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

