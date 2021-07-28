import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCqZdWY46gt1M9BYYJACvU6wUmfWY2Vbsg",
  authDomain: "movie-app-b0e65.firebaseapp.com",
  projectId: "movie-app-b0e65",
  storageBucket: "movie-app-b0e65.appspot.com",
  messagingSenderId: "418784470652",
  appId: "1:418784470652:web:1b5e778d82f63e6f0b8bf9",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
