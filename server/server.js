const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fileRoutes = require("./routes/fileRoutes");
const path = require("path");
const fs = require("fs");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

/* ===== ADD THIS BLOCK ===== */
const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
/* ========================== */

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(uploadDir));

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SFS Backend Server is running",
    createdBy: "RAJAT CHITRANSH",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("------------------------------------");
  console.log("SFS SERVER STARTED");
  console.log(`http://localhost:${PORT}`);
  console.log("------------------------------------");
});