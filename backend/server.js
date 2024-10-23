const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Set up Express
const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/notesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Routes
const notesRoutes = require("./routes/notes");
app.use("/api/notes", notesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

