const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { connect } = require("mongoose");
const errorHandler = require("../middlewares/error-handler");

// Signup new user
exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    console.log(req, "request");

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
      .json({ message: "User Created Sucessfully.", userId: result._id });
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
      res.status(401).json({
        message:"A user with this email could not be found.",
      })
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      res.status(401).json({
        message:"Wrong password. Please enter a correct one.",
      })
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

//Logout User
exports.logout = (req, res, next) => {
  //logout
};

//Fetch User
exports.getuser = async (req, res, next) => {
  try {
    //Extract query param for pagination
    const currentPage = req.query.page || 1;
    const perPage = 5;
    const totalUser = await User.countDocuments();

    //Fetch all userdata
    const users = await User.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (!users) {
      return errorHandler("No user registered yet.", 404);
    }

    // Send response
    res.status(200).json({
      message: "User fetched successfully.",
      users: users,
      totalUser: totalUser,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//Delete a customer
exports.deleteUser = async (req, res, next) => {
  try {
    //Fetch the customer
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      errorHandler("Could not find User.", 404);
    }
    //Remove the customer
    await User.findByIdAndRemove(userId);

    //Send response
    res.status(200).json({ message: "User Data deleted." });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};