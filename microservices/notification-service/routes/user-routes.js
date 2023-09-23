const express = require('express');
const { addNotification, getNotification } = require('../controller/notification-controller');
const authenticate = require('../middleware/authMiddleware'); // Import the authentication middleware

const router = express.Router();

router.post('/notifications/', addNotification);
// Apply authentication middleware to protect other routes
router.use(authenticate);
router.get('/notifications/', getNotification);

module.exports = router;
