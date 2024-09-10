// Path 
const mongoose = require('mongoose');

// Schema 
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        }, 
        slug: {
            type: String,
            unique: true,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        authorName: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: false
        },
        size: {
            type: String,
            require: false
        },
        desc: {
            type: String,
            require: false
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'types'
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories'
        },
        tag: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product-tags'
        }],
        comment: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comments'
        }]
    },
    { timestamps: true }
);

// Model 
const Product = mongoose.model('products', ProductSchema);

module.exports = Product;