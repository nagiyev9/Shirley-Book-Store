// Path 
const express = require('express');

// Imports 
const tagController = require('../controller/product-tag-controller');

// Router 
const router = express.Router();

// GET  
router.get('/tag/get-all', tagController.getAllTags); // All Tags
router.get('/tag/:slug', tagController.getTagBySlug); // One Tag By Slug 

// Post 
router.post('/tag/add-tag', tagController.addNewTag);

// PUT 
router.put('/tag/update-tag/:slug', tagController.editTag);

// Delete
router.delete('/tag/delete-tag/:slug', tagController.deleteTag);

module.exports = router;