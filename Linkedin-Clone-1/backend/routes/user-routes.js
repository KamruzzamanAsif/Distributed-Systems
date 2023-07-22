const express = require('express');
const { getAllUsers, addUser, signinUser } = require('../controller/user-controller');
const { createPost, getAllPostsExceptCurrentUser } = require('../controller/post-controller');

const multer = require('multer');

const router = express.Router();

router.get('/users/', getAllUsers);
router.post('/signup/', addUser);
router.post('/signin/', signinUser);

// for simplicity i will use this router for all task
// Multer middleware to handle the file upload
const upload = multer({ dest: 'uploads/' });
router.post('/posts/', upload.single('image'), createPost);
router.get('/posts/', getAllPostsExceptCurrentUser);



module.exports = router;