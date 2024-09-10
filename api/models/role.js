// Path 
const mongoose = require('mongoose');

// Schema 
const RoleSchema = mongoose.Schema(
    {
        role: {
            type: String,
            require: true
        },
        slug: {
            type: String,
            require: true,
            unique: true
        }
    }
);

// Model 
const Role = mongoose.model('roles', RoleSchema);

module.exports = Role;