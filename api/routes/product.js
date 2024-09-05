// Path 
const express = require('express');

// Imports 
const productController = require('../controller/product-controlelr');
const { upload } = require('../utils/image-upload');

// Middleware
const authenticateToken = require('../middleware/auth');

// Router 
const router = express.Router();

// GET 
router.get('/get-all', productController.getAllProducts); // All Products
router.get('/:slug', productController.getProductBySlug); // One Product By Slug

// POST 
router.post('/add-product', upload.single('image'), productController.addNewProduct);

// PUT
router.put('/update-product/:slug', upload.single('image'), productController.editProduct);

// DELETE 
router.delete('/delete-product/:slug', productController.deleteProduct);

module.exports = router;