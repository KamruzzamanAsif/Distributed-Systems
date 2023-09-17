const express = require('express');
const { getAllUsers, addUser, signinUser } = require('../controller/user-controller');
const { createPost, getAllPosts } = require('../controller/post-controller');
const multer = require('multer');
const { addNotification, getNotification } = require('../controller/notification-controller');
const authenticate = require('../middleware/authMiddleware'); // Import the authentication middleware

const router = express.Router();

// Allow unrestricted access to signup and signin routes
router.post('/signup/', addUser);
router.post('/signin/', signinUser);

// Multer middleware to handle the file upload
const upload = multer({ dest: 'uploads/' });
router.post('/posts/', upload.single('image'), createPost);

router.post('/notifications/', addNotification);

// Apply authentication middleware to protect other routes
router.use(authenticate);

router.get('/posts/', getAllPosts);
router.get('/notifications/', getNotification);

module.exports = router;
