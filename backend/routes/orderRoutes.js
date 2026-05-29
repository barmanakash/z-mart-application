const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// Mount client authorization middleware ahead of execution layers
router.route('/').post(protect, createOrder);

module.exports = router;