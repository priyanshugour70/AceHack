import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr8DwgW6NBife1nxREO5pTS0PlRx6-Yzo",
  authDomain: "acehack-acb23.firebaseapp.com",
  projectId: "acehack-acb23",
  storageBucket: "acehack-acb23.appspot.com",
  messagingSenderId: "792294342789",
  appId: "1:792294342789:web:9b089efd544a52b0f0e9ec",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage, auth };
