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

//reference collection or table of emails
var newUserID = firebase.database().ref("email");


//event listener- listen for form to submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();

    // console.log("is this working?");
}

//Get values

var email = getInputVal("email");
var password = getInputVal("password");


//Save user
saveUser(email, password);

// console.log(email);


//Function to get form values
function getInputVal() {
    return document.getElementById(id).value;
}

//create a function to save the email to firebase
function saveEmail(email) {
    var newUser = newUserID.push();
    newUser.set({
        email: email,
        password: password,
    });
}