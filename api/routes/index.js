// Path 
const express = require('express');

// Imports 
const categoryRouter = require('./category');
const typeRouter = require('./type');
const blogTagRouter = require('./blog-tag');
const productTagRouter = require('./product-tag');
const blogRouter = require('./blog');
const roleRouter = require('./role');
const userRouter = require('./user');
const authRouter = require('./auth');
const commentRouter = require('./comment');
const productRouter = require('./product');

// Routes
const router = express.Router();

// Categoy
router.use('/category', categoryRouter);

// Type 
router.use('/type', typeRouter);

// Blog Tag
router.use('/blog', blogTagRouter);

// Product Tag
router.use('/product', productTagRouter);

// Blog 
router.use('/blog', blogRouter);

// Role
router.use('/role', roleRouter);

// User 
router.use('/user', userRouter);

// Auth 
router.use('/auth', authRouter);

// Comment
router.use('/comment', commentRouter);

// Product
router.use('/product', productRouter);

module.exports = router;