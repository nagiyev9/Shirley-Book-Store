// Paths And Imports 
const Product = require("../models/product");

// Get All Products 
exports.getAllProducts = async () => {
    const products = await Product.find()
        .populate('type', 'title _id')
        .populate('category', 'title _id')
        .populate('tag', 'title _id')
        .populate('comment', 'comment _id');
    return products;
};

// Get One Product By Slug 
exports.getProductBySlug = async slug => {
    const product = await Product.findOne({ slug: slug })
        .populate('type', 'title _id')
        .populate('category', 'title _id')
        .populate('tag', 'title _id')
        .populate('comment', 'comment _id');
    return product;
};

// Add New Product 
exports.addNewProduct = async product => {
    const newProduct = new Product(product);
    return await newProduct.save();
};

// Edit Product 
exports.editProduct = async (slug, product) =>{ 
    const editProduct = await Product.findOneAndUpdate(
        { slug: slug },
        product,
        { new: true }
    );
    return editProduct;
};

// Delete Product 
exports.deleteProduct = async slug => {
    const product = await Product.findOneAndDelete({ slug: slug });
    return { message: `'${product.name}' removed successfully` };
};  