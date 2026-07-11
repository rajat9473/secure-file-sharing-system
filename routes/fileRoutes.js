const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const File = require("../models/File");

const {
  uploadFile,
  getUserFiles,
  deleteFile,
} = require("../controllers/fileController");

// Upload File
router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  uploadFile
);

// Get My Files
router.get(
  "/my-files",
  authMiddleware,
  getUserFiles
);

// Delete File
router.delete(
  "/:id",
  authMiddleware,
  deleteFile
);

// Public Share Link
router.get("/share/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).send("File Not Found");
    }

    res.download(file.filePath, file.fileName);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;