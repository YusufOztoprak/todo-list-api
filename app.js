require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/todoRoutes")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(() =>     console.log("MongoDB Connected"))
    .catch(err => console.log(err));
app.use("/api/tasks",taskRoutes);

module.exports = app;
