const express = require("express");
const { verifyEmail,signup, login } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/login", login);

module.exports = router;
