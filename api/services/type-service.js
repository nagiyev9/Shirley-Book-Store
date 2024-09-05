// Paths And Imports
const Type = require("../models/type");

// Get All Types 
exports.getAllTypes = async () => {
    const types = await Type.find();
    return types;
};

// Get One Type By Slug 
exports.getTypeBySlug = async slug => {
    const type = await Type.find({
        slug: slug
    });
    return type;
};

// Add New Type 
exports.addNewType = async type => {
    const newType = new Type(type);
    return await newType.save();
};

// Edit Type 
exports.editType = async (slug, type) => {
    const editType = await Type.findOneAndUpdate(
        { slug: slug },
        type,
        { new: true }
    );
    return editType;
};

// Delete Type
exports.deleteType = async slug => {
    const type = await Type.findOneAndDelete({
        slug: slug
    });
    return { message: `${type.title} Removed Successfully` };
};