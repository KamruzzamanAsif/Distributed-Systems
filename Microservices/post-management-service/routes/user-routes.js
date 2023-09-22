const express = require('express');
const { createPost, getAllPosts } = require('../controller/post-controller');
const multer = require('multer');
const authenticate = require('../middleware/authMiddleware'); // Import the authentication middleware

const router = express.Router();

// Multer middleware to handle the file upload
const upload = multer({ dest: 'uploads/' });
router.post('/posts/', upload.single('image'), createPost);

// Apply authentication middleware to protect other routes
router.use(authenticate);
router.get('/posts/', getAllPosts);

module.exports = router;
