import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8HgGCdkDCBupxNiVW0Ce1yNzo2xQQeIM",
  authDomain: "mobile-market-bf248.firebaseapp.com",
  databaseURL: "https://mobile-market-bf248-default-rtdb.firebaseio.com",
  projectId: "mobile-market-bf248",
  storageBucket: "mobile-market-bf248.appspot.com",
  messagingSenderId: "955843621841",
  appId: "1:955843621841:web:a0048c15314e12737a26f0",
  measurementId: "G-C9BD0K68DS"

};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };
