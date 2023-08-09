const express = require("express");

const isAuth = require("../middlewares/is-auth");
const upload = require("../middlewares/multer");
const roomController = require("../controllers/room");

const router = express.Router();

// Create new room
router.post(
  "/admin/room",
  isAuth(["admin"]),
  upload.single("roomImage"),
  roomController.postRoom
);

// Fetch all rooms
router.get("/rooms", roomController.getRooms);

// Fetch a room
router.get("/room/:roomId", roomController.getRoom);

// Update a room
router.put(
  "/admin/room/:roomId",
  isAuth(["admin"]),
  upload.single("roomImage"),
  roomController.updateRoom
);

// Remove a room
router.delete(
  "/admin/room/:roomId",
  isAuth(["admin"]),
  roomController.deleteRoom
);

module.exports = router;
