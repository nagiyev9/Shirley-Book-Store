// Paths And Imports 
const Blog = require("../models/blog");

// Get All Blogs
exports.getAllBlogs = async () => {
    const blogs = await Blog.find()
        .populate('tags', 'title _id');
    return blogs;
};

// Get One Blog By Slug 
exports.getBlogBySlug = async slug => {
    const blog = await Blog.find({ slug: slug })
        .populate('tags', 'title _id');
    return blog;
};

// Add New Blog 
exports.addNewBlog = async blog => {
    const newBlog = new Blog(blog);
    return await newBlog.save();
};

// Edit Blog 
exports.editBlog = async (slug, blog) => {
    const editBlog = await Blog.findOneAndUpdate(
        { slug: slug },
        blog,
        { new: true }
    );
    return editBlog;
};

// Delete Blog 
exports.deleteBlog = async slug => {
    const blog = await Blog.findOneAndDelete({
        slug: slug
    });
    return { message: `${blog.title} removed successfully` };
};