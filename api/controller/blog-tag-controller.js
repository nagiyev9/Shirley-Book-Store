// Paths And Imports 
const tagService = require('../services/blog-tag-service');
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
        res.status(200).json({
            status: 200,
            message: "Tag added successfully",
            data: newTag
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

// Edit Tag 
exports.editTag = async (req, res) => {
    const slug = req.params.slug;
    const tag = req.body;
    tag.slug = slugField(tag.title);
    try {
        const editTag = await tagService.editTag(slug, tag);
        res.status(200).json({
            status: 200,
            message: "Tag edited successfully",
            data: editTag
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    };
};

// Delete Tag 
exports.deleteTag = async (req, res) => {
    const slug = req.params.slug;
    try {
        const tag = await tagService.deleteTag(slug);
        res.status(200).json({
            status: 200,
            message: "Tag deleted successfully",
            data: tag
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};