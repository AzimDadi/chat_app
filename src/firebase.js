import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCK0jphx91FtSOfgBg7jcD69Vv-NY5fQmc",
  authDomain: "chat-app3-b071b.firebaseapp.com",
  projectId: "chat-app3-b071b",
  storageBucket: "chat-app3-b071b.appspot.com",
  messagingSenderId: "615383754575",
  appId: "1:615383754575:web:8dfe16ce29a66c5122473a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
