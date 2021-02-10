import firebase from "firebase";
const firebaseConfig = {
//Firebase Config info
};

  const app = firebase.initializeApp(firebaseConfig);
  //Your creating the database or should I get started with it? cool.
  //I have the db setup 
  const db = app.firestore();

  export default db;
