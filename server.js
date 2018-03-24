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


// Sequelize-Based on Star Wars App-LW 

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});