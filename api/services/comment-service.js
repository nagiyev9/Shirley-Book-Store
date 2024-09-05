// Paths And Imports 
const Comment = require("../models/comment");

// Get All Comments 
exports.getAllComments = async () => {
    const comments = await Comment.find()
        .populate('user', 'firstName lastName email _id')
        .populate('productID', 'name _id');
    return comments;
};

// Get Comment By Id 
exports.getCommentByID = async id => {
    const comment = await Comment.findOne({ _id: id })
        .populate('user', 'fisrtName lastName email _id')
        .populate('productID', 'name _id');
    return comment;
};

// Get Comment By Product Id
exports.getCommentsByProductID = async id => {
    const comments = await Comment.find({ productID: id })
        .populate('user', 'firstName lastName email _id')
        .populate('productID', 'name _id');
    return comments;
};

// Add New Comment 
exports.addNewComment = async comment => {
    const newComment = new Comment(comment);
    return await newComment.save();
};  

// Delete Comment 
exports.deleteComment = async id => {
    const comment = await Comment.findOneAndDelete({ _id: id });
    return comment;
};