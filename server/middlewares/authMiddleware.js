const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect middleware to authenticate users
exports.protect = async (req, res, next) => {
    try {
        // Get access token from cookies
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized access: No token provided" });
        }

        try {
            // Verify the token
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded.userId).select("-password");  // No need to retrieve the password

            if (!user) {
                return res.status(401).json({ message: "No User found" });
            }

            req.user = user; 
            next(); 
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Unauthorized: Access token has expired" });
            } else if (error.name === "JsonWebTokenError") {
                return res.status(401).json({ message: "Unauthorized: Invalid access token" });
            }
            throw error;
        }
    } catch (error) {
        console.log("Error in protect middleware:", error.message);
        return res.status(401).json({ message: "Invalid access token" });
    }
};

// Admin route middleware to check if user is admin
exports.adminRoute = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next(); // If user is admin, continue to the next middleware
    } else {
        return res.status(403).json({ message: "Access denied: Admins only" });
    }
};

