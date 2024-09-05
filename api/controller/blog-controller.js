// Path And Imports 
const fs = require('fs');
const blogService = require('../services/blog-service');
const { slugField } = require('../utils/slugField');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Get All Blogs 
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get Blog By Slug 
exports.getBlogBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const blog = await blogService.getBlogBySlug(slug);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Add New Blog 
exports.addNewBlog = async (req, res) => {
    const blog = req.body;
    console.log("reqBody", req.body);
    console.log("req-file", req.file);
    blog.image = req.file.filename;
    blog.slug = slugField(blog.title);
    try {
        const newBlog = await blogService.addNewBlog(blog);
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    };
};  

// Edit BLog 
exports.editBlog = async (req, res) => {
    const slug = req.params.slug;
    const blog = req.body;
    blog.slug = slugField(blog.title);
    let image = req.body.image;

    console.log("blog", blog);

    if (req.file) {
        image = req.file.filename;

        fs.unlink('./public/images', + req.body.image, (err) => {
            console.log(err);
        });
    };

    if (typeof blog.tags === 'string') {
        try {
            blog.tags = JSON.parse(blog.tags).map(id => new ObjectId(id));
            console.log("tags", blog.tags);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error.message });
        }
    }

    try {   
        const editBlog = await blogService.editBlog(slug, blog);
        res.status(200).json(editBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);  
    };
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
    const slug = req.params.slug;
    try {
      const blog = await blogService.deleteBlog(slug);
      res.status(200).json(blog);  
    } catch (error) {
        res.status(500).json(error);
    };
};