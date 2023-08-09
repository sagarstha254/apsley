const { Schema, model } = require("mongoose");
const reservation = require("./reservation");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "user",
    },
    reservation: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reservation",
      },
    ],
  },
  { timeStamps: false }
);

userSchema.methods.getUserReservations = async function () {
  try {
    // await this.populate("reservation");
    await this.populate({
      path: "reservation",
      populate: {
        path: "roomId",
        model: "Room",
      },
    });
    return this.reservation;
  } catch (error) {
    console.log("Error retrieving user reservations:", error);
    throw error;
  }
};

// userSchema.methods.getUserReservations = async function () {
//   try {
//     // await this.populate("reservation");
//     await this.populate({
//       path: "reservation",
//       populate: {
//         path: "roomId",
//         model: "Room",
//       },
//     });
//     return this.reservation;
//   } catch (error) {
//     console.log("Error retrieving user reservations:", error);
//     throw error;
//   }
// };

module.exports = model("User", userSchema);
