// Paths And Imports 
const tagService = require('../services/product-tag-service');
const { slugField } = require('../utils/slugField');

// Get All Tags
exports.getAllTags = async (req, res) => {
    try {
        const tags = await tagService.getAllTags();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get One Tag By Slug
exports.getTagBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const tag = await tagService.getTagBySlug(slug);
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Add New Tag 
exports.addNewTag = async (req, res) => {
    const tag = req.body;
    tag.slug = slugField(tag.title);
    try {
        const newTag = await tagService.addNewTag(tag);
        res.status(200).json(newTag);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Edit Tag 
exports.editTag = async (req, res) => {
    const slug = req.params.slug;
    const tag = req.body;
    tag.slug = slugField(tag.title);
    try {
        const editTag = await tagService.editTag(slug, tag);
        res.status(200).json(editTag);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Tag 
exports.deleteTag = async (req, res) => {
    const slug = req.params.slug;
    try {
        const tag = await tagService.deleteTag(slug);
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};