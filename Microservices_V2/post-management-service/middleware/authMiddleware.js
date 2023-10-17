const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  // Get the token from the request headers, cookies, or wherever you're sending it
  const token = req.header('Authorization'); // Assuming the token is sent in the 'Authorization' header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, 'my-secret-key'); // Replace 'my-secret-key' with your actual secret key

    // Attach the decoded user information to the request for further processing
    req.user = decoded;

    // If the token is valid, proceed to the next middleware
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authenticate;
