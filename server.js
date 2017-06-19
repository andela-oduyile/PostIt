var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.config();

var userRoutes = require('./server/routes/user');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('Welcome to my Awesome chat application!');
});

app.use('/api', userRoutes);

app.listen(3000, function() {
  console.log('Server listening on port 3000!');
});
