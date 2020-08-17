import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-r0QlGMYVyTkF2vJpqs8TxVzyccPvJN4",
  authDomain: "youth-arts-movement.firebaseapp.com",
  databaseURL: "https://youth-arts-movement.firebaseio.com",
  projectId: "youth-arts-movement",
  storageBucket: "youth-arts-movement.appspot.com",
  messagingSenderId: "952789697940",
  appId: "1:952789697940:web:20d4a2031bd1ef20a27b81",
  measurementId: "G-NTYBFQJY7K",
});

const db = firebaseApp.firestore();

export { db };
