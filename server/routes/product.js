const express = require("express");

const isAuth = require("../middlewares/is-auth");
const upload = require("../middlewares/multer");
const productController = require("../controllers/product");

const router = express.Router();

// Create new product
router.post(
  "/admin/product",
  isAuth(["admin"]),
  upload.single("productImage"),
  productController.postProduct
);

// Fetch all products
router.get("/products", productController.getProducts);

// Fetch a product
router.get("/product/:productId", productController.getProduct);

// Update a product
router.put(
  "/admin/product/:productId",
  isAuth(["admin"]),
  upload.single("productImage"),
  productController.updateProduct
);

// Remove a product
router.delete(
  "/admin/product/:productId",
  isAuth(["admin"]),
  productController.deleteProduct
);

module.exports = router;
