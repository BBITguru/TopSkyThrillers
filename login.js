//User name authentication with firebase. Can we use login feature with Firebase or do we use class examples
//Identity - who is our player
//LOGIN

//User Firebase Auth?



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