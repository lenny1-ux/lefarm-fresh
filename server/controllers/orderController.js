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
// remove from orders
export const removeAllFromOrders = async (req, res) => {
	try {
		const { productId } = req.body;
		const user = req.user;
		if (!productId) {
			user.orderItems = [];
		} else {
			user.orderItems = user.orderItems.filter((item) => item.id !== productId);
		}
		await user.save();
		res.json(user.orderItems);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
 // updating the orders
export const updateQuantity = async (req, res) => {
	try {
		const { id: productId } = req.params;
		const { quantity } = req.body;
		const user = req.user;
		const existingItem = user.orderItems.find((item) => item.id === productId);

		if (existingItem) {
			if (quantity === 0) {
				user.orderItems = user.orderItems.filter((item) => item.id !== productId);
				await user.save();
				return res.json(user.orderItems);
			}

			existingItem.quantity = quantity;
			await user.save();
			res.json(user.orderItems);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	} catch (error) {
		console.log("Error in updateQuantity controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
