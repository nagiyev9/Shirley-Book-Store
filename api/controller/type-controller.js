// Paths And Imports 
const typeService = require('../services/type-service');
const { slugField } = require('../utils/slugField');

// Get All Types 
exports.getAllTypes = async (req, res) => {
    try {
        const types = await typeService.getAllTypes();
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get Type By Slug 
exports.getTypeBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const type = await typeService.getTypeBySlug(slug);
        res.status(200).json(type);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Add New Type 
exports.addNewType = async (req, res) => {
    const type = req.body;
    type.slug = slugField(type.title);
    try {
        const newType = await typeService.addNewType(type);
        res.status(200).json(newType);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Edit Type 
exports.editType = async (req, res) => {
    const slug = req.params.slug;
    const type = req.body;
    type.slug = slugField(type.title);
    try {
        const editType = await typeService.editType(slug, type);
        res.status(200).json(editType);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Delete Type 
exports.deleteType = async (req, res) => {
    const slug = req.params.slug;
    try {
        const type = await typeService.deleteType(slug);
        res.status(200).json(type);
    } catch (error) {
        res.status(500).json(error);
    }
};