// routes/search.js
const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/name/:name", authMiddleware, searchController.searchByName);
router.get("/phone/:phone", authMiddleware, searchController.searchByPhone);

module.exports = router;
