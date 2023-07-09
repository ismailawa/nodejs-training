const jwt = require('jsonwebtoken');
const userService = require('../services/users.service');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'token rquired' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const result = await userService.findOne(decoded.data.id);
    req.user = result.result;
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }

  console.log('from middle ware', token);
  next();
};
