const jwt = require("jsonwebtoken");

const decodeToken = (headerData) => {
  if (!headerData) return null;

  const [, token] = headerData.split(" ");
  return jwt.decode(token, process.env.JWT_SECRET);
};

module.exports = { decodeToken };
