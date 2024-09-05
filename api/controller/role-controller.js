// Paths And Imports 
const roleService = require('../services/role-service');
const { slugField } = require('../utils/slugField');

// Get All Roles 
exports.getAllRoles = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get One Slug By Slug
exports.getRoleBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const role = await roleService.getRoleBySlug(slug);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Add New Role 
exports.addNewRole = async (req, res) => {
    const role = req.body;
    role.slug = slugField(role.role);
    try {
        const newRole = await roleService.addNewRole(role);
        res.status(200).json(newRole);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Edit Role 
exports.editRole = async (req, res) => {
    const slug = req.params.slug;
    const role = req.body;
    role.slug = slugField(role.role);
    try {
        const editRole = await roleService.editRole(slug, role);
        res.status(200).json(editRole);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Delete Role 
exports.deleteRole = async (req, res) => {
    const slug = req.params.slug;
    try {
        const role = await roleService.deleteRole(slug);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json(error);
    };
};