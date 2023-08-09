const multer = require("multer");
const path = require("path");

// Multer File Storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destinationPath = "images";

    if (file.fieldname === "productImage") {
      destinationPath = path.join(destinationPath, "products");
    } else if (file.fieldname === "roomImage") {
      destinationPath = path.join(destinationPath, "rooms");
    }

    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Multer File Filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});

module.exports = upload;
