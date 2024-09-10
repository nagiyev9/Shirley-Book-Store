// Path 
const mongoose = require('mongoose');

// Schema 
const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            require: true
        },
        slug: {
            type: String,
            require: true,
            unique: true
        },
        desc: {
            type: String,
            require: true
        },
        publisherName: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blog-tags'
        }],
    },
    {
        timestamps: true    
    }
);

const Blog = mongoose.model('blogs', BlogSchema);

module.exports = Blog;