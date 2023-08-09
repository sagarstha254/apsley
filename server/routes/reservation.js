const express = require("express");

const isAuth = require("../middlewares/is-auth");

const reservationController = require("../controllers/reservation");

const router = express.Router();

router.post(
  "/reservation",
  isAuth(["user"]),
  reservationController.postReservation
);

router.get(
  "/admin/reservations",
  isAuth(["admin"]),
  reservationController.getReservations
);

router.get(
  "/admin/reservation/:reservationId",
  isAuth(["admin"]),
  reservationController.getReservation
);

router.put(
  "/admin/reservation/:reservationId",
  isAuth(["admin"]),
  reservationController.updateReservation
);

router.delete(
  "/admin/reservation/:reservationId",
  isAuth(["admin"]),
  reservationController.deleteReservation
);

//Get user reservations
router.get(
  "/reservations",
  isAuth(["user", "admin"]),
  reservationController.getUserReservations
);

module.exports = router;
