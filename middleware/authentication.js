const user = require('../models/User');
const jwt = rquire('jsonwebtoken');

const { UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
  // chck header
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token, authorization denied');
  }

  const token = authHader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = { userId: payload.userId, name: payload };
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

module.exports = auth;
