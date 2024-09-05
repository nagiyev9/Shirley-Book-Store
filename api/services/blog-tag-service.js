// Path And Imports 
const Tag = require("../models/blog-tag");

// Get All Tags
exports.getAllTags = async () => {
    const tags = await Tag.find();
    return tags;
};

// Get One Tag By Slug 
exports.getTagBySlug = async slug => {
    const tag = await Tag.findOne({
        slug: slug
    });
    return tag;
};

// Add New Tag 
exports.addNewTag = async tag => {
    const newTag = new Tag(tag);
    return await newTag.save();
};

// Edit Tag 
exports.editTag = async (slug, tag) => {
    const editTag = await Tag.findOneAndUpdate(
        { slug: slug },
        tag,
        { new: true }
    );
    return editTag;
};

// Delete Tag 
exports.deleteTag = async slug => {
    const tag = await Tag.findOneAndDelete({
        slug: slug
    });
    return { message: `${tag.title} removed successfully` };
};