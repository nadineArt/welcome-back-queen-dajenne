import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDa4q_AV28D6f3ozFvJFxGwBLo-ch9953o",
  authDomain: "welcome-back-queen-dajenne.firebaseapp.com",
  databaseURL: "https://welcome-back-queen-dajenne-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "welcome-back-queen-dajenne",
  storageBucket: "welcome-back-queen-dajenne.firebasestorage.app",
  messagingSenderId: "916694382547",
  appId: "1:916694382547:web:6e6a2de99996177571e126"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, remove, get };
