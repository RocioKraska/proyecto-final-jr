// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpkeYrONVxF45RnKrpdz1vnRSzSdgziNg",
  authDomain: "ecommerce-f4849.firebaseapp.com",
  projectId: "ecommerce-f4849",
  storageBucket: "ecommerce-f4849.appspot.com",
  messagingSenderId: "794874200009",
  appId: "1:794874200009:web:a087017a59614b433ab218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}
