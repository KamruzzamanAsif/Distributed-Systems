const express = require('express');
const { addUser, signinUser } = require('../controller/user-controller');

const router = express.Router();

// Allow unrestricted access to signup and signin routes
router.post('/signup/', addUser);
router.post('/signin/', signinUser);

module.exports = router;
