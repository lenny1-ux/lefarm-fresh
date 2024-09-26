const express = require('express');
const { getProducts, deleteProduct, getProductsByCategory, adminRoute, createProduct } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getProducts);
router.post('/', protect, adminRoute, createProduct); 
router.delete("/:id", protect, adminRoute, deleteProduct);
router.get("/category/:category", getProductsByCategory);

module.exports = router;

