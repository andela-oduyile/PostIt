var express = require('express');
var users = require('../controllers/user');
var router = express.Router();

router.post('/user/signup', users.signup);

router.post('/user/signin', users.signin);

module.exports = router;
