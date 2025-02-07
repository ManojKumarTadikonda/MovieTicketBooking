const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");
const movieScheduleRoutes = require("./routes/movieScheduleRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ensure "qr_codes" directory exists
const qrDirectory = path.join(__dirname, "qr_codes");
if (!fs.existsSync(qrDirectory)) {
    fs.mkdirSync(qrDirectory);
}

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api", movieScheduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
