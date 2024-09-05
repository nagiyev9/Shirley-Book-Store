// Path 
const express = require('express');

// Imports 
const commentController = require('../controller/comment-controller');

// Router 
const router = express.Router();

// GET 
router.get('/get-all', commentController.getAllComments); // All Comments
router.get('/:_id', commentController.getCommentById); // One Comment By Id
router.get('/product/:_id', commentController.getCommentsByProductId); // Comments By Product Id

// POST 
router.post('/add-comment', commentController.addNewComment);

// DELETE
router.delete('/delete-comment/:_id', commentController.deleteComment);

module.exports = router;
