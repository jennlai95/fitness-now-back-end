const jwt = require('jsonwebtoken');
const { User } = require('../models/UserModel');


// user auth middleware
const authMiddleware = async (req, res, next) => {
    try {
  
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ _id: decoded.userID });

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Unauthorised, please try again.' });
    }
};

// checks if admin
const isAdmin = (request, response, next) => {
    if (request.user && request.user.isAdmin) {
      // User is an admin, allow the request to proceed
      return next();
    } else {
      // User is not an admin, send a 403 Forbidden response
      return response.status(403).json({ error: "Unauthorised, admin only access" });
    }
  };

module.exports = { authMiddleware, isAdmin } ;