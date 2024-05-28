const express = require("express");
const router = express.Router();
const spamController = require("../controllers/spamController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/mark", authMiddleware, spamController.markSpam);

module.exports = router;
