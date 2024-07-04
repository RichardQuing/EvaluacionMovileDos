import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyDjNfNdduT5zoc6WoML4Cg_SDz_KALJUr4",
  authDomain: "mascotas-def46.firebaseapp.com",
  projectId: "mascotas-def46",
  storageBucket: "mascotas-def46.appspot.com",
  messagingSenderId: "468080055811",
  appId: "1:468080055811:web:ac98cacd63128fd5f3e036"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {db,auth};