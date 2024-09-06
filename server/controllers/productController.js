const Product = require('../models/Product');

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Product (Admin Only)
exports.createProduct = async (req, res) => {
  const { name, price, description, category, imageUrl, countInStock } = req.body;

  try {
    const product = new Product({ name, price, description, category, imageUrl, countInStock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

