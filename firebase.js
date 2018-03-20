var firebase = require("firebase");

import * as firebase from "firebase";

// Set the configuration for your app
  // TODO: Replace with your project's config object
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSRIbPDJ5GWD4rDUclfdHHpEWm9eA5d4o",
    authDomain: "topskythrillers.firebaseapp.com",
    databaseURL: "https://topskythrillers.firebaseio.com",
    projectId: "topskythrillers",
    storageBucket: "topskythrillers.appspot.com",
    messagingSenderId: "228375406134"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  