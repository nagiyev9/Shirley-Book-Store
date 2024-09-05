// Path And Imports 
const User = require("../models/user");
const RefreshToken = require('../models/refresh-token');
const jwt = require('jsonwebtoken');

// Get All Users 
exports.getAllUsers = async () => {
    const users = await User.find()
        .populate('role', 'role -_id');
    return users;
};

// Get One User By Slug 
exports.getUserBySlug = async slug => {
    const user = await User.findOne({ slug: slug })
        .populate('role', 'role -_id');
    return user;
};

// Get User By Email 
exports.getUserByEmail = async email => {
    const user = await User.findOne({ email: email });
    return user;
};

// Edit User
exports.editUser = async (slug, user) => {
    const editUser = await User.findOneAndUpdate(
        { slug: slug },
        user,
        { new: true }
    );
    return editUser;
};

// Refresh Token 
exports.refreshAccessToken = async refreshToken => {
    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);

        const savedToken = await RefreshToken.findOne({ token: refreshToken });

        if (!savedToken) return { status: 403, message: "Invalid Refresh Token" };

        const newAccessToken = jwt.sign({ email: decoded.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        return { status: 200, accessToken: newAccessToken };

    } catch (error) {
        return { status: 403, message: "Refresh token expired or invalid!" };
    }
};