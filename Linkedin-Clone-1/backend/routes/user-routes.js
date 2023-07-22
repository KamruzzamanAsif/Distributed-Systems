const express = require('express');
const { getAllUsers, addUser, signinUser } = require('../controller/user-controller');
const { createPost, getAllPostsExceptCurrentUser } = require('../controller/post-controller');

const router = express.Router();

router.get('/users/', getAllUsers);
router.post('/signup/', addUser);
router.get('/signin/', signinUser);

// for simplicity i will use this router for all task
router.post('/posts/', createPost);
router.get('/posts/', getAllPostsExceptCurrentUser);



module.exports = router;