const express = require('express');

const router = express.Router();
const { Login_user, Signup_user } = require('../controllers/authController')

router.post('/login', Login_user);

router.post('/signup', Signup_user);

module.exports = router;    