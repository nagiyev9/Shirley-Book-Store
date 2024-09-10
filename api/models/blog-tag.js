// Path And Import
const mongoose = require('mongoose');

// Schema
const TagSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        slug: {
            type: String,
            require: true,
            unique: true
        }
    }, 
    {
        timestamps: true
    }
);

// Model
const Tag = mongoose.model('blog-tags', TagSchema);

module.exports = Tag;