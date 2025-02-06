const express = require("express");
const dotenv = require("dotenv");
const user = require("./data");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();
app.use(cors());

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`server started st ${PORT}`);
});
