const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/user");
const subjectRoutes = require("./routes/subject");
const env = require("dotenv/config");

app.use("/api/", userRoutes);
app.use("/learn/", subjectRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
