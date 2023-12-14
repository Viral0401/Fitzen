import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWL-z8hlmnPI7Xhrc3eU3cBIbjRkDQF9E",
  authDomain: "technovate-3749f.firebaseapp.com",
  projectId: "technovate-3749f",
  storageBucket: "technovate-3749f.appspot.com",
  messagingSenderId: "871492969100",
  appId: "1:871492969100:web:eba1cbf213fab8440411a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Example of creating a document reference
export const docRef = doc(db, "Donors", "JGkW3XM2n3k8EC0xBZMw"); // Replace with your actual document path

export const auth = getAuth(app);
export default app;
