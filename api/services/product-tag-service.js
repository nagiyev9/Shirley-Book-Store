// Path And Imports 
const ProductTag = require("../models/product-tag");

// Get All Tags
exports.getAllTags = async () => {
    const tags = await ProductTag.find();
    return tags;
};

// Get One Tag By Slug 
exports.getTagBySlug = async slug => {
    const tag = await ProductTag.findOne({
        slug: slug
    });
    return tag;
};

// Add New Tag 
exports.addNewTag = async tag => {
    const newTag = new ProductTag(tag);
    return await newTag.save();
};

// Edit Tag 
exports.editTag = async (slug, tag) => {
    const editTag = await ProductTag.findOneAndUpdate(
        { slug: slug },
        tag,
        { new: true }
    );
    return editTag;
};

// Delete Tag 
exports.deleteTag = async slug => {
    const tag = await ProductTag.findOneAndDelete({
        slug: slug
    });
    return { message: `${tag.title} removed successfully` };
};