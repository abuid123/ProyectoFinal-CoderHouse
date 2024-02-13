// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyDZAGEsu8-f3j6a9KlNzTWXGgadf5BO9Uk",
  authDomain: "coderhouse-ecommerce-7799c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-7799c",
  storageBucket: "coderhouse-ecommerce-7799c.appspot.com",
  messagingSenderId: "855410623319",
  appId: "1:855410623319:web:f2718959b699116ae23412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conectarnos a la base de datos
export const db = getFirestore(app)