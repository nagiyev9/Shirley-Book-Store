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
            unique: true
        }
    }, 
    {
        timestamps: true
    }
);

// Model
const ProductTag = mongoose.model('product-tags', TagSchema);

module.exports = ProductTag;