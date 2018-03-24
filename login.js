//User name authentication with firebase. Can we use login feature with Firebase or do we use class examples
//Identity - who is our player
//LOGIN
var express = require("express");
var app = express();
require('rootpath')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000);
console.log("My Service is listening on port 3000.");

var firebase = require("firebase");

const config = {
  apiKey: "AIzaSyBSRIbPDJ5GWD4rDUclfdHHpEWm9eA5d4o",
  authDomain: "topskythrillers.firebaseapp.com",
  databaseURL: "https://topskythrillers.firebaseio.com",
  projectId: "topskythrillers",
  storageBucket: "topskythrillers.appspot.com",
  messagingSenderId: "228375406134"
};
firesbase.initalizeApp(config);

//User Firebase Auth?
const auth = firebase.auth();

auth.signInWithEmailandPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebaseUser => { });


//creating a user with email and password
function submitCreateAccount() {
    var displayName = document.querySelector("#entry-displayname");
    var email = document.querySelector("#entry-email");
    var password = document.querySelector("#entry-password");

    firebase.auth().submitUserWithEmailandPassword(email.value, password.value)
        .then(function(user) {
            //add the display Name
            user.updateProfile({ displayName: displayName.value });

        });
}

//already created an account firebase stores? 
function signInWithEmailandPassword() {
    var email = document.querySelector("#email");
    var password = doucment.querySelector("#password");

    firebase.auth().signInWithEmailandPassword(email.value, password.value);
}

//if we want our user's to sign in with google
//google Auth provider through Firebase
function googleSignin(googleUser) {
    var credential = firebase.auth.GoogleAuthProvider.credential({
        "idToken": googleUser.getAuthResponse().id_token

    });
    firebase.auth().signInWithCredential(credential);
}


// Firebase User Authorization
(function () {
    const config = {
      apiKey: "AIzaSyBSRIbPDJ5GWD4rDUclfdHHpEWm9eA5d4o",
      authDomain: "topskythrillers.firebaseapp.com",
      databaseURL: "https://topskythrillers.firebaseio.com",
      projectId: "topskythrillers",
      storageBucket: "topskythrillers.appspot.com",
      messagingSenderId: "228375406134"
    };
    firebase.initializeApp(config);

    // Get elements for player ID sing up & login
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
      // Get email and password
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });

    // Add signup event
    btnSignUp.addEventListener('click', e => {
      // Get email and pass
      // TODO: Check 4 REAL EMAIL
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise
        // .then(user => console.log())
        .catch(e => console.log(e.message));
    });

    // Logout Button
    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
      } else {
        console.log('not logged in');
      }
    });
  });