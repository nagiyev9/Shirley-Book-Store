// Paht
const mongoose = require('mongoose');

// Schema 
const TokenSchema = mongoose.Schema(
    {
        token: {
            type: String,
            require: true
        },
        expiresAt: {
            type: Date,
            require: true
        }
    },
    { timestamps: true }
);

// Model 
const RefreshToken = mongoose.model('token', TokenSchema);

module.exports = RefreshToken;