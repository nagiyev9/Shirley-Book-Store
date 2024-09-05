// Paths And Imports 
const userService = require('../services/user-service');
const { slugField } = require('../utils/slugField');

// Get All Users 
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get User By Slug 
exports.getUserBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const user = await userService.getUserBySlug(slug);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Edit User 
exports.editUser = async (req, res) => {
    const slug = req.params.slug;
    const user = req.body;
    try {
        const editUser = await userService.editUser(slug, user);
        res.status(200).json(editUser);
    } catch (error) {
        res.status(500).json(error);
    };
};