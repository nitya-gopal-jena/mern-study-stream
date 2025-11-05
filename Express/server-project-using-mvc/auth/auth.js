const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const auth = req.headers['authorization'];

  if (!auth) {
    return res.status(401).json({ message: 'Access token is not available' });
  }

  const token = auth.split(' ')[1];

  try {
    const payload = jwt.verify(token, 'student1234');
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token ' });
  }
};

module.exports = authentication;
