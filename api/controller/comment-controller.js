// Paths And Imports 
const commentService = require('../services/comment-service');

// Get All Comments 
exports.getAllComments = async (req, res) => {
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get One Comment By Id
exports.getCommentById = async (req, res) => {
    const id = req.params._id;
    try {
        const comment = await commentService.getCommentByID(id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get Comments By Product Id
exports.getCommentsByProductId = async (req, res) => {
    const id = req.params._id;
    try {
        const comments = await commentService.getCommentsByProductID(id);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Add New Comment 
exports.addNewComment = async (req, res) => {
    const comment = req.body;
    try {
        const newComment = await commentService.addNewComment(comment);
        res.status(200).json({
            status: 200,
            message: 'Comment added successfully',
            data: newComment
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Comment 
exports.deleteComment = async (req, res) => {
    const id = req.params._id;
    try {
        const comment = await commentService.deleteComment(id);
        res.status(200).json({
            status: 200,
            message: `'${comment.comment}' removed successfully`,
            data: comment
        });
    } catch (error) {
        res.status(500).json(error);
    }
};