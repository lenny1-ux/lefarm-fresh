const Order = require('../models/Order');

// Create Order
exports.createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  try {
    const order = new Order({
      user: req.user.id,
      orderItems,
      totalPrice
    });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User Orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

