const express = require('express');
const router = express.Router();

// 🚨 DOUBLE CHECK THIS IMPORT: Ensure it matches the exact object destructuring syntax
const { getFilteredProducts } = require('../controllers/productController');

// This line will now successfully receive a valid function instead of undefined
router.get('/', getFilteredProducts);

module.exports = router;