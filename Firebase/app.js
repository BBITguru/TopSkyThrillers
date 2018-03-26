//Dependencies
var express = require("express");
var app = express();

require('rootpath')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000);
console.log("My Service is listening on port 3000.");

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBSRIbPDJ5GWD4rDUclfdHHpEWm9eA5d4o",
    authDomain: "topskythrillers.firebaseapp.com",
    databaseURL: "https://topskythrillers.firebaseio.com",
    projectId: "topskythrillers",
    storageBucket: "topskythrillers.appspot.com",
    messagingSenderId: "228375406134"
};
firebase.initializeApp(config);

//Global unique identifier
var Guid = require('guid');

app.post('/players/add', function(req, res) {
    var _guid = Guid.create();
    var guid = _guid.toString();

    firebase.database().ref('players/' + guid.toString())
        .set(req.body, function(err) {
            var message = {
                code: 200,
                status: "Insert completed"
            }
            if (err)
                message = {
                    code: 500,
                    status: "error",
                    message: err
                }
            else
                message.result = req.body;
            res.send(message);
        });
});

// GET Player data
app.get('/players/getMany', function(req, res) {
    firebase.database().ref('players').once('value')
        .then(function(data) {
            res.send(data.val());
        })
});

// // GET a all promptCards BUT in multiple objects
// app.get('/promptCard/getOne',function (req, res){
//   firebase.database().ref('promptCard').once('value')
//   .then(function (data) {
//     res.send(data.val());
//   })
// });

app.get('/promptCard/getOne', function(req, res) {
    firebase.database().ref("promptCard/3");
});

// // GET a single promptCard
// app.get('/promptCard',function (req, res){
//   firebase.database("SELECT * FROM promptCard", function(err, result){
//     for (var i = 0; i <result.length; i++){
//       result[18]
//     }
//   }
//   .then(function (data) {
//     res.send(data.val());
//   })
// });

// UPDATE player data
app.put('/players/edit', function(req, res) {
    var playerId = req.body.playerId;
    var playerInfo = req.body.playerInfo;
    firebase.database().ref('players/' + playerId)
        .update(playerInfo, function(err) {
            var message = {
                code: 200,
                status: "Update completed"
            }
            if (err)
                message = {
                    code: 500,
                    status: "error",
                    message: err
                }
            else
                message.result = req.body;
            res.send(message);
        });
});

// DELETE player data
app.delete('/players/delete', function(req, res) {
    var playerId = req.body.playerId;
    firebase.database().ref('players/' + playerId)
        .remove(function(err) {
            var message = { code: 200, status: "Remove completed" }
            if (err)
                message = { code: 500, status: "error", message: err }
            else
                message.result = req.body;

            res.send(message);
        });
});