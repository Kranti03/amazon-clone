// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVaUDX91_ty-3CIKcs7NPv49lvpBkemBM",
    authDomain: "clone-da996.firebaseapp.com",
    projectId: "clone-da996",
    storageBucket: "clone-da996.appspot.com",
    messagingSenderId: "268876976760",
    appId: "1:268876976760:web:5128520cba5445ba5c938d",
    measurementId: "G-6BRJWDYPXZ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


export { db };