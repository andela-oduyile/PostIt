var firebase = require('firebase');
var firebaseConfig = require('../../config/firebase');
firebase.initializeApp(firebaseConfig);

var usersRef = firebase.database().ref().child('users');

exports.signup = function(req, res) {
  // Ensure username and email are unique
  usersRef.push({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }, (err) => {
    if(err) {  
      res.send('Oops! something went wrong');
    } else {
      res.send('Signing user up...');
    }
  });
}

exports.signin = function(req, res) {
  usersRef.on('value', (snapshot) => {
    res.send(snapshot.val());
  }, (error) => {
    res.send('Oops! something went wrong');
  });
}
