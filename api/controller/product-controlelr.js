// Paths And Imports 
const productService = require('../services/product-service');
const { slugField } = require('../utils/slugField');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Get All Products 
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    };
};

// Get One Product By Slug
exports.getProductBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const product = await productService.getProductBySlug(slug);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Product 
exports.addNewProduct = async (req, res) => {
    const product = req.body;
    console.log("req.body", req.body);
    product.image = req.file.filename;
    product.slug = slugField(product.name);
    try {
        const newProduct = await productService.addNewProduct(product);
        res.status(200).json({
            status: 200,
            message: "Product added successfully",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    };
};

// Edit Product
exports.editProduct = async (req, res) => {
    const slug = req.params.slug;
    const updatedData = req.body;

    console.log("prod name", updatedData);

    if (req.file) {
        updatedData.image = req.file.filename;
    }

    if (updatedData.name) {
        updatedData.slug = slugField(updatedData.name);
    }

    console.log("tag", updatedData.tag);
    console.log("tag type", typeof updatedData.tag);

    if (typeof updatedData.tag === 'string') {
        try {
            updatedData.tag = JSON.parse(updatedData.tag).map(id => new ObjectId(id));
            console.log("Parsed tag array:", updatedData.tag);
        } catch (error) {
            console.error('Error parsing tag field:', error);
            return res.status(400).json({ error: 'Invalid tag format. Please provide a valid array of IDs.' });
        }
    }

    try {
        const existingProduct = await productService.getProductBySlug(slug);

        const duplicateProduct = await productService.getProductBySlug(updatedData.slug);
        if (duplicateProduct && duplicateProduct._id.toString() !== existingProduct._id.toString()) {
            return res.status(400).json({ error: "Duplicate slug detected. Please use a unique name." });
        }

        const editedProduct = await productService.editProduct(slug, updatedData);
        res.status(200).json({
            status: 200,
            message: "Product edited successfully",
            data: editedProduct
        });
    } catch (error) {
        console.error('Error editing product:', error);
        res.status(500).json({ error: "Failed to edit product." });
    }
};

// Delete Product 
exports.deleteProduct = async (req, res) => {
    const slug = req.params.slug;
    try {
        const product = await productService.deleteProduct(slug);
        res.status(200).json({
            status: 200,
            message: "Product deleted successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};