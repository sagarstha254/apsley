const { Schema, model } = require("mongoose");

const reservationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      require: true,
    },
    checkInDate: {
      type: Date,
      require: true,
    },
    checkOutDate: {
      type: Date,
      require: true,
    },
    guests: {
      type: Number,
      require: true,
    },
  },
  { timestamps: false }
);

module.exports = model("Reservation", reservationSchema);
