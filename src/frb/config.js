import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyANoz7Vpe_C_7AewefTXcl-dOKsLsL6z7E",
    authDomain: "login-winter.firebaseapp.com",
    databaseURL: "https://login-winter-default-rtdb.firebaseio.com",
    projectId: "login-winter",
    storageBucket: "login-winter.appspot.com",
    messagingSenderId: "758295551436",
    appId: "1:758295551436:web:3c1ffabb5b8679de6fd169"
});
console.log(firebase.app().options);