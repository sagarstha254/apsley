const { validationResult } = require("express-validator");

const errorHandler = require("../middlewares/error-handler");
const clearImage = require("../utils/clear-image");
const multer = require('multer')
const upload = multer();

const Product = require("../models/product");
const { connect } = require("mongoose");

const express = require("express");
const app = express();

//Create new product
exports.postProduct = async (req, res, next) => {
  try {
    const imageName = req.file.filename

    // Input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      return errorHandler(errorMessage, 422);
    }
    if (!req.file.filename) {
      return errorHandler("Please provide a image.", 422);
    }


    console.log(req.file.filename,"image");
    
    // Extract input data
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.file.filename;

    // Create new product
    const product = new Product({
      name: name,
      description: description,
      price: price,
      image: req.file.filename,
    });

    // Save the product
    const result = await product.save();
    console.log(result);

    // Send response
    res
      .status(200)
      .json({ message: "Product added successfully.", product: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



// Fetch all products (pagination)
exports.getProducts = async (req, res, next) => {
  try {
    //Extract query param for pagination
    const currentPage = req.query.page || 1;
    const perPage = 5;
    const totalItems = await Product.countDocuments();

    //Fetch all products
    const products = await Product.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (!products) {
      return errorHandler("No product added yet.", 404);
    }

    // Send response
    res.status(200).json({
      message: "Products fetched successfully.",
      products: products,
      totalItems: totalItems,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Fetch a single product
exports.getProduct = async (req, res, next) => {
  try {
    // Fetch single product
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return errorHandler("Could not find product.", 404);
    }

    // Send response
    res
      .status(200)
      .json({ message: "Product fetched successfully", product: product });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Update a product
exports.updateProduct = async (req, res, next) => {
  try {
    // Validate input details
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    // Extract input data
    const productId = req.params.productId;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    let image = req.body.image;
    console.log(price,"dfa");

    if (req.body.image) {
      image = req.body.image;
    }
    if (!image) {
      errorHandler("No file picked.", 422);
    }

    // Fetch product
    const product = await Product.findById(productId);
    if (!product) {
      errorHandler("Could not find product.", 404);
    }
    if (image !== product.image) {
      clearImage(product.image);
    }

    // Update product details
    product.name = name;
    product.description = description;
    product.price = price;
    product.image = image;

    // Save updated product
    const updatedProduct = await product.save();

    // Send response
    res
      .status(200)
      .json({ message: "Product updated.", product: updatedProduct });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//Delete a product
exports.deleteProduct = async (req, res, next) => {
  try {
    //Fetch the product
    const productId = req.params.productId;
    console.log(productId, "lo");
    const product = await Product.findById(productId);

    if (!product) {
      errorHandler("Could not find product.", 404);
    }
    clearImage(product.image);
    //Remove the product
    await Product.findByIdAndRemove(productId);

    //Send response
    res.status(200).json({ message: "Product deleted." });
  } catch (err) {
    console.log("oyeeeee");
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
