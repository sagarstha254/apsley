const { validationResult } = require("express-validator");

const errorHandler = require("../middlewares/error-handler");

const User = require("../models/user");
const Room = require("../models/room");
const Reservation = require("../models/reservation");

// Create new reservation for user
exports.postReservation = async (req, res, next) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    // Find the user
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      errorHandler("User not found.", 404);
    }

    // Find the room
    const roomId = req.body.roomId;
    const room = await Room.findById(roomId);
    if (!room) {
      errorHandler("Room not found.", 404);
    }

    // Extract input data
    const checkInDate = req.body.checkInDate;
    const checkOutDate = req.body.checkOutDate;
    const guests = req.body.guests;

    // Create new reservation
    const reservation = new Reservation({
      userId: userId,
      roomId: roomId,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      guests: guests,
    });

    //Save the reservation
    const result = await reservation.save();

    //Update the user's reservations
    user.reservation.push(reservation._id);
    await user.save();

    //Send response
    res
      .status(200)
      .json({ message: "Reservation made successfully!", reservation: result });

    //Catch Errors
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Get all reservations (pagination)
exports.getReservations = async (req, res, next) => {
  try {
    //Extract query param for pagination
    const currentPage = req.query.page || 1;
    const perPage = 5;
    const totalItems = await Reservation.find().countDocuments();

    //Fetch all reservations
    const reservations = await Reservation.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (!reservations) {
      errorHandler("No reservation made yet!", 404);
    }

    // Send response
    res.status(200).json({
      message: "Reservations Fetched!",
      reservations: reservations,
      totalItems: totalItems,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Fetch a single reservation
exports.getReservation = async (req, res, next) => {
  try {
    // Fetch the reservation
    const reservationId = req.params.reservationId;
    const reservation = await Reservation.findById(reservationId);

    if (!reservation) {
      errorHandler("Could not find reservation.", 404);
    }

    //Send reponse
    res.status(200).json({
      message: "Reservation fetched successfully.",
      reservation: reservation,
    });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

// Update a reservation
exports.updateReservation = async (req, res, next) => {
  try {
    // validate input details
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      errorHandler(errorMessage, 422);
    }

    //Find the reservation
    const reservationId = req.params.reservationId;
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      errorHandler("Could not find reservation.", 404);
    }

    // Extract input data
    const checkInDate = req.body.checkInDate;
    const checkOutDate = req.body.checkOutDate;
    const guests = req.body.guests;

    // Update reservation details
    reservation.checkInDate = checkInDate;
    reservation.checkOutDate = checkOutDate;
    reservation.guests = guests;

    //Save the updated details
    const result = await reservation.save();

    //Send response
    res
      .status(200)
      .json({ message: "Reservation updated.", reservation: result });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

// Delete a reservation
exports.deleteReservation = async (req, res, next) => {
  try {
    //Fetch the reservation
    const reservationId = req.params.reservationId;
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      errorHandler("Could not find reservation.", 404);
    }

    //Remove the reservation
    await Reservation.findByIdAndRemove(reservationId);

    //Send response
    res.status(200).json({ messge: "Reservation deleted." });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//Get user reservation
exports.getUserReservations = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) errorHandler("Could not find user.", 404);

  const reservation = await user.getUserReservations();
  if (!reservation) errorHandler("No reservation made yet.", 404);

  res.status(200).json({
    message: "Reservation fetched successfully.",
    reservation: reservation,
  });
};
