import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDW54yBrYXwDy4a3AaTVkEY-HV_Y0cVv_c",
    authDomain: "loginfirebase-2e518.firebaseapp.com",
    projectId: "loginfirebase-2e518",
    storageBucket: "loginfirebase-2e518.appspot.com",
    messagingSenderId: "632981828059",
    appId: "1:632981828059:web:16544e4187d3cc401a77fe",
    measurementId: "G-L0YJ66SJZ8"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire