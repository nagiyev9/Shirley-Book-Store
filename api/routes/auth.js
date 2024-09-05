// Path 
const express = require('express');

// Imports 
const authController = require('../controller/auth-controller');

// Middlewares
const { validate_register, handle_validation_errors } = require('../middleware/validation');

// Router 
const router = express.Router();

// REGISTER 
router.post('/register', validate_register, handle_validation_errors, authController.register);

// LOGIN
router.post('/login', authController.login);

// Refresh Token 
router.post('/refresh-token', authController.refreshToken);

module.exports = router;