import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAonprEZkU_6R2Ergcdk421uletacFPRkc",
//   authDomain: "chat--app-859b8.firebaseapp.com",
//   projectId: "chat--app-859b8",
//   storageBucket: "chat--app-859b8.appspot.com",
//   messagingSenderId: "681696171316",
//   appId: "1:681696171316:web:4f512b995b085bbb208161",
// };



const firebaseConfig = {
  apiKey: "AIzaSyDVi2BYQt96hzF7sZYcMbpAGPIlTxjavVc",
  authDomain: "chat--app2-92557.firebaseapp.com",
  projectId: "chat--app2-92557",
  storageBucket: "chat--app2-92557.appspot.com",
  messagingSenderId: "787311411135",
  appId: "1:787311411135:web:60e414eee24a86149f2b0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
