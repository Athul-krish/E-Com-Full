import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuB6pqLS122Rv1RUPRTiAiDZcavgdJeyg",
  authDomain: "ecom-web-3acd9.firebaseapp.com",
  projectId: "ecom-web-3acd9",
  storageBucket: "ecom-web-3acd9.appspot.com",
  messagingSenderId: "684356854527",
  appId: "1:684356854527:web:d9a469de26f63c8fbba2ca",
  measurementId: "G-BQSE3NVZHT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
