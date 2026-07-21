import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChc8cwZh298jJdDA9ObtNEPObbET_hVqk",
  authDomain: "gotplaced-f2bb7.firebaseapp.com",
  projectId: "gotplaced-f2bb7",
  storageBucket: "gotplaced-f2bb7.firebasestorage.app",
  messagingSenderId: "29208723558",
  appId: "1:29208723558:web:94979e9f7f78c7b4a52da7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;