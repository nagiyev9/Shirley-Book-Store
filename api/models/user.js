// Path 
const mongoose = require('mongoose');

// Schema 
const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        password: {
            type: String,
            require: true 
        },
        slug: {
            type: String,
            require: true
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            default: '66cf7b516d1af1a2de4a53c3',
            ref: 'roles'
        }
    }
);

// Model 
const User = mongoose.model('users', UserSchema);

module.exports = User;