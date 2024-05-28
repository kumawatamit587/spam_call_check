const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    // console.log(token);
    if (err) {
      return res.status(500).send({ message: "Failed to authenticate token." });
    }
    req.userId = decoded.id;
    next();
  });
};
