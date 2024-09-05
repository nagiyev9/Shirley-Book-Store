// Path 
const express = require('express');

// Imports 
const roleController = require('../controller/role-controller');

// Router 
const router = express.Router();

// GET 
router.get('/get-all', roleController.getAllRoles); // All Roles
router.get('/:slug', roleController.getRoleBySlug); // One Role By Slug

// POST 
router.post('/add-role', roleController.addNewRole);

// PUT 
router.put('/update-role/:slug', roleController.editRole);

// DELETE
router.delete('/delete-role/:slug', roleController.deleteRole);

module.exports = router;