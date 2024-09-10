// Path and Imports 
const categoryService = require('../services/category-service');
const { slugField } = require("../utils/slugField");

// Get All Categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get Category By Slug
exports.getCategoryBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        const category = await categoryService.getCategoryBySlug(slug);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Add New Category 
exports.addNewCategory = async (req, res) => {
    try {
        const category = req.body;
        category.slug = slugField(category.title);
        const newCategory = await categoryService.addNewCategory(category);
        res.status(200).json({
            status: 200,
            message: "Category added successfully",
            data: newCategory
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit Category 
exports.editCategory = async (req, res) => {
    const slug = req.params.slug;
    const category = req.body;
    category.slug = slugField(category.title);
    try {
        const categoryEdit = await categoryService.editCategory(slug, category);
        res.status(200).json({
            status: 200,
            message: "Category edited successfully",
            data: categoryEdit
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

// Delete Category 
exports.deleteCategory = async (req, res) => {
    const slug = req.params.slug;
    try {
        const category = await categoryService.deleteCategory(slug);
        res.status(200).json({
            status: 200,
            message: "Category deleted successfully",
            data: category
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};