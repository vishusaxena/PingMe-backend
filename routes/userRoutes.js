const express = require("express");
const {
  registerUser,
  userLogin,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", userLogin);
router.get("/", protect, allUsers);

module.exports = router;
