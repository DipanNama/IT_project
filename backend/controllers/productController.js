const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");


// Create Products - Admin

exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}


// Get All Products

exports.getAllProducts = async (req, res) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    });
}

// Get Product Details

exports.getProductDetails = async (req, res,next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found",404));
    }

    res.status(200).json({
        success: true,
        product
    });
}


// Update Products -- Admin

exports.updateProduct = async (req, res, next) => {

    let product = Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        product
    })
}

// Delete Products -- Admin 

exports.deleteProduct = async (req,res,next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    })

}