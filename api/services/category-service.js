// Path and Imports
const Category = require("../models/category");

// Get All Categories 
exports.getAllCategories = async () => {
    const categories = await Category.find();
    return categories;
};

// Get Category By Slug 
exports.getCategoryBySlug = async slug => {
    const category = await Category.find({
        slug: slug
    });
    return category;
};

// Add New Category 
exports.addNewCategory = async (category) => {
    const newCategory = new Category(category);
    return await newCategory.save();
};

// Edit Catgeory
exports.editCategory = async (slug, category) => {
    const categoryEdit = await Category.findOneAndUpdate(
        { slug: slug },
        category,
        { new: true }
    );
    return categoryEdit;
};

// Delete Category 
exports.deleteCategory = async slug => {
    const category = await Category.findOneAndDelete({
        slug: slug
    });
    return { message: `category '${category.title}' removed successfully` };
};