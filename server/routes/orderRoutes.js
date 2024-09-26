const express = require('express');
const { createOrder, getUserOrders,removeAllFromCart, updateQuantity } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, getUserOrders);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);


module.exports = router;
