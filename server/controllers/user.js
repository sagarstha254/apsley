const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const errorHandler = require("../middlewares/error-handler");

// Signup new user
exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    console.log(req,'request');

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const result = await user.save();

    res
      .status(201)
      .json({ message: "User Created Sucessfully.", userId: result._id});
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Login user
exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      errorHandler("A user with this email could not be found.", 401);
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      errorHandler("Wrong password. Please enter a correct one.", 401);
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        userRole: user.role.toString(),
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Logged in sucessfully.",
      userId: user._id,
      token: token,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.logout = (req, res, next) => {
  //logout
};
