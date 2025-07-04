require("dotenv").config();
const mongoose = require("mongoose");

// Name Database
const db = "capture-it-photography";

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI + db)
  .then(() => console.log(`Connected to ${db} DB... `))
  .catch((err) => console.log("Db connection error:", err));
