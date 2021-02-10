import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDJHByHPneyZFQPTpwRiJYosJfdGuPFU0o",
  authDomain: "react-chat-app-af783.firebaseapp.com",
  projectId: "react-chat-app-af783",
  storageBucket: "react-chat-app-af783.appspot.com",
  messagingSenderId: "382388974456",
  appId: "1:382388974456:web:a1601ce1d16f945c218e8d"
};

  const app = firebase.initializeApp(firebaseConfig);
  //Your creating the database or should I get started with it? cool.
  //I have the db setup 
  const db = app.firestore();

  export default db;