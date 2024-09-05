// Path 
const express = require('express');

// Imports 
const categoryController = require('../controller/category-controller');

// Routes
const router = express.Router();

// GET 
router.get('/get-all', categoryController.getAllCategories); // All Categories
router.get('/:slug', categoryController.getCategoryBySlug); // Category By Slug

// POST 
router.post('/add-category', categoryController.addNewCategory);

// PUT 
router.put('/update-category/:slug', categoryController.editCategory);

// Delete
router.delete('/delete-category/:slug', categoryController.deleteCategory);

module.exports = router;
