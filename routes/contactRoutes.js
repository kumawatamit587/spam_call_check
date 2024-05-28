const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add", authMiddleware, contactController.addContact);
router.get("/", authMiddleware, contactController.getContacts);

module.exports = router;
