// Path 
const mongoose = require('mongoose');

// Schema 
const CommentSchema = mongoose.Schema(
    {
        comment: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Model 
const Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment;