// // *********************************************************************************
// // CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// // *********************************************************************************

// // Dependencies
// var Sequelize = require("sequelize");

// // Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("starwars", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var firebase = require("firebase");

import * as firebase from "firebase";

// Sets up the Express App and does something to handle data parsing
var PORT = process.env.PORT || 8080;
var app = express();

//  Initialize Firebase
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
    });

    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);


// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(port, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});