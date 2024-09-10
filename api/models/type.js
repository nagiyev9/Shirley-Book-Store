// Path
const mongoose = require('mongoose');

// Schema
const TypeSchema = mongoose.Schema(
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
const Type = mongoose.model('types', TypeSchema);

module.exports = Type;