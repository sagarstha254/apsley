const { body } = require("express-validator");
const User = require("../models/user");

const validateSignup = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Please enter a name at least 3 characters long."),

  body("email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject("Email address already exists.");
        }
      });
    })
    .normalizeEmail(),

  body("password")
    .isLength({ min: 5, max: 25 })
    .isAlphanumeric()
    .withMessage(
      "Please enter a password with only numbers and text and at least 5 characters."
    ),

  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Please enter a matching password.");
    }
    return true;
  }),
];

const validateLogin = [
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password")
    .isLength({ min: 5, max: 25 })
    .isAlphanumeric()
    .withMessage("Please enter a valid password."),
];

module.exports = {
  validateSignup,
  validateLogin,
};
