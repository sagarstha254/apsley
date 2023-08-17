const { validationResult } = require("express-validator");

const Room = require("../models/room");
const errorHandler = require("../middlewares/error-handler");
const clearImage = require("../utils/clear-image");
const { connect } = require("mongoose");

// Create new room
exports.postRoom = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    // Validate inputs
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }
    if (!req.file.filename) {
      errorHandler("No image provided", 422);
    }

    // Extract input data
    const number = req.body.number;
    const description = req.body.description;
    const roomType = req.body.roomType;
    const price = req.body.price;
    const image = req.file.filename;

    // Create new room
    const room = new Room({
      number: number,
      description: description,
      roomType: roomType,
      price: price,
      image: image,
    });

    // Save the created room
    const result = await room.save();

    // Send response
    res
      .status(200)
      .json({ message: "Room added successfully.", product: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Fetch all rooms
exports.getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    if (!rooms) {
      errorHandler("No room added yet.", 404);
    }
    res
      .status(200)
      .json({ message: "Rooms fetched successfully.", rooms: rooms });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Fetch a single room
exports.getRoom = async (req, res, next) => {
  try {
    const roomId = req.params.roomId;
    const room = await Room.findById(roomId);
    if (!room) {
      errorHandler("Could not find room.", 404);
    }
    res.status(200).json({ message: "Room fetch", room: room });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Update a room
exports.updateRoom = async (req, res, next) => {
  try {
    // Data validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    // Extract input data
    const roomId = req.body.roomId;
    const number = req.body.number;
    const description = req.body.description;
    const roomType = req.body.roomType;
    const price = req.body.price;
    let image = req.file.filename;

    if (req.file.filename) {
      image = req.file.filename;
    }
    if (!image) {
      errorHandler("No file picked.", 422);
    }

    // Fetch room
    const room = await Room.findById(roomId);
    if (!room) {
      errorHandler("Could not find room.", 404);
    }
    if (image !== room.image) {
      clearImage(room.image);
    }
    // Update room details

    room.number = number;
    room.description = description;
    room.roomType = roomType;
    room.price = price;
    room.image = image;

    // Save updated room
    const updatedRoom = await room.save();

    // Send response
    res.status(200).json({ message: "Room updated.", room: updatedRoom });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Delete a room
exports.deleteRoom = async (req, res, next) => {
  try {
    //Fetch the room
    const roomId = req.params.roomId;
    const room = await Room.findById(roomId);
    if (!room) {
      errorHandler("Could not find room.", 404);
    }

    clearImage(room.image);

    //Remove the room
    await Room.findByIdAndRemove(roomId);

    //Send response
    res.status(200).json({ message: "Room deleted." });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
