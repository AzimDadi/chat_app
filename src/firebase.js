import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCrRBep9zHTan324tmnskV-NR9ijxBMMPU",
  authDomain: "chat-app1-a051c.firebaseapp.com",
  projectId: "chat-app1-a051c",
  storageBucket: "chat-app1-a051c.appspot.com",
  messagingSenderId: "999958234228",
  appId: "1:999958234228:web:c599d1bad1e6a6c8acbd21"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
