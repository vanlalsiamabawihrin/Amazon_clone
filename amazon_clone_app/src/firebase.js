// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAggQsLxHIddAzcPRMOlTcvQw8RrfBZ18E",
  authDomain: "clone-app-9b442.firebaseapp.com",
  databaseURL: "https://clone-app-9b442.firebaseio.com",
  projectId: "clone-app-9b442",
  storageBucket: "clone-app-9b442.appspot.com",
  messagingSenderId: "859473888799",
  appId: "1:859473888799:web:206c811f7f8084c2b0772a",
  measurementId: "G-XHZR5KVSPR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
