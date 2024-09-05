// Path 
const express = require('express');

// Imports 
const blogController = require('../controller/blog-controller');
const { upload } = require('../utils/image-upload');

// Router 
const router = express.Router();

// GET 
router.get('/get-all', blogController.getAllBlogs); // All Blogs 
router.get('/:slug', blogController.getBlogBySlug); // One Blog By Slug

// POST
router.post('/add-blog', upload.single('image'), blogController.addNewBlog);

// PUT
router.put('/update-blog/:slug', upload.single('image'), blogController.editBlog);

// DELETE
router.delete('/delete-blog/:slug', blogController.deleteBlog);

module.exports = router;