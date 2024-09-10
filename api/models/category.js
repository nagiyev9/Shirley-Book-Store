// Path 
const mongoose = require('mongoose');

// Schema 
const CategorySchema = mongoose.Schema(
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
const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;