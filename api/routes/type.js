// Path 
const express = require('express');

// Imports 
const typeController = require('../controller/type-controller');

// Router
const router = express.Router();

// GET 
router.get('/get-all', typeController.getAllTypes); // All Types
router.get('/:slug', typeController.getTypeBySlug); // One Type By Slug

// POST 
router.post('/add-type', typeController.addNewType);

// PUT
router.put('/update-type/:slug', typeController.editType);

// DELETE
router.delete('/delete-type/:slug', typeController.deleteType);

module.exports = router;