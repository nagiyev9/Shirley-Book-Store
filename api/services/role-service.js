// Paths and Imports 
const Role = require("../models/role");

// Get All Roles 
exports.getAllRoles = async () => {
    const roles = await Role.find();
    return roles;
};

// Get Role By Slug 
exports.getRoleBySlug = async slug => {
    const role = await Role.find({ slug: slug });
    return role;
};

// Add New Role 
exports.addNewRole = async role => {
    const newRole = new Role(role);
    return await newRole.save();
};

// Edit Role 
exports.editRole = async (slug, role) => {
    const editRole = await Role.findOneAndUpdate(
        { slug: slug },
        role,
        { new: true }
    );
    return editRole;
};

// Delete Role 
exports.deleteRole = async slug => {
    const role = await Role.findOneAndDelete({
        slug: slug
    });
    return { message: `${role.role} removed successfully` };
};