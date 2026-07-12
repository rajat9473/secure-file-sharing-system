const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    console.log("Destination Called");

    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    console.log("Uploading File:", file.originalname);

    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
});

module.exports = upload;