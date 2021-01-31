import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSgi1MRRPErFA6DwWVvUNa6Mh5AyHI404",
    authDomain: "react-todo-list-cat.firebaseapp.com",
    projectId: "react-todo-list-cat",
    storageBucket: "react-todo-list-cat.appspot.com",
    messagingSenderId: "684513260276",
    appId: "1:684513260276:web:2f746c0bb66daa27e5a4a1",
    measurementId: "G-R2748F6LRB"
});

const db = firebaseApp.firestore();

export default db;