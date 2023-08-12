const express = require("express");
const isAuth = require("../middlewares/is-auth");

const userController = require("../controllers/user");
const { validateSignup, validateLogin } = require("../middlewares/validator");

const router = express.Router();

// Route for user signup
router.post("/signup", validateSignup, userController.signup);

// Route for user login
router.post("/login", validateLogin, userController.login);

// Route for user logout
router.post("/logout", validateLogin, userController.logout);

// Fetch all user
router.get("/user", userController.getuser);

// Remove a user
router.delete(
  "/user/:userId",
  isAuth(["admin"]),
  userController.deleteUser
);


module.exports = router;
