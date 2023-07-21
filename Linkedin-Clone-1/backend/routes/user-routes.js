const express = require('express');
const { getAllUsers, addUser, signinUser } = require('../controller/user-controller');

const router = express.Router();

router.get('/users/', getAllUsers);
router.post('/signup/', addUser);
router.get('/signin/', signinUser);


module.exports = router;