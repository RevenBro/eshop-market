import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXZirfYnbasye5Fy2jly3nLlXYYQ9DXGY",
  authDomain: "eshopauth-473f1.firebaseapp.com",
  projectId: "eshopauth-473f1",
  storageBucket: "eshopauth-473f1.firebasestorage.app",
  messagingSenderId: "306634306816",
  appId: "1:306634306816:web:2cb586ffd227496117efe5",
  measurementId: "G-WGB1N7NL4R"
};

const app = initializeApp(firebaseConfig);
export default app;