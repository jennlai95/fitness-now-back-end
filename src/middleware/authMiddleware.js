const jwt = require('jsonwebtoken');
const { User } = require('../models/UserModel');

const authMiddleware = async (req, res, next) => {
    try {
  
        const token = req.header('Authorization').replace('Bearer', '');
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

module.exports = authMiddleware;