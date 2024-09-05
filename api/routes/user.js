// Path 
const express = require('express');

// Imports 
const userController = require('../controller/user-controller');

// Router 
const router = express.Router();

// GET 
router.get('/get-all', userController.getAllUsers); // All Users
router.get('/:slug', userController.getUserBySlug); // One User By Slug

// PUT
router.put('/update-user/:slug', userController.editUser);

module.exports = router;