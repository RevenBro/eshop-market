// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore uchun
import { getAnalytics } from "firebase/analytics"; // Analytics uchun (ixtiyoriy)

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyD8CCQmvxS03VSmbSHyJ5U16UlCwQqMKjE",
  authDomain: "webeshopapp.firebaseapp.com",
  projectId: "webeshopapp",
  storageBucket: "webeshopapp.appspot.com", // Bu yerda "firebasestorage.app" emas, "appspot.com" bo'lishi kerak
  messagingSenderId: "1001148194783",
  appId: "1:1001148194783:web:789e12e23b06c456cc2e6a",
  measurementId: "G-F9J0M2HEDM",
};

// Firebase dasturini ishga tushirish
const app = initializeApp(firebaseConfig);

// Analytics va Firestore ni ulash
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db, analytics };