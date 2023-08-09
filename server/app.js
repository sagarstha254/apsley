//Modules Imports
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

//Local Imports
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const roomRoutes = require("./routes/room");
const reservationRoutes = require("./routes/reservation");

//Express Application
const app = express();

//General Middleware
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

//CORS Headers

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Routes Middleware
app.use(userRoutes);
app.use(productRoutes);
app.use(roomRoutes);
app.use(reservationRoutes);

//Error Handler
app.use((error, req, res, next) => {
  console.log("Error Handler: ", error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //Create Server
    app.listen(process.env.PORT, () => {
      console.log(`Listening to PORT http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
