require("dotenv").config();
const jwt = require("jsonwebtoken");
const errorHandler = require("./error-handler");

module.exports = (roles) => {
  return (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return errorHandler("User not authenticated", 401);
    }

    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (err) {
      err.statusCode = 500;
      return next(err);
    }

    if (!decodedToken) {
      return errorHandler("User not authenticated", 401);
    }

    if (roles && !roles.includes(decodedToken.userRole.trim())) {
      return errorHandler("You don't have permissions.", 401);
    }

    req.userId = decodedToken.userId;
    next();
  };
};
