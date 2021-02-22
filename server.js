const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = "path";

const PORT = process.env.PORT || 3000;

const app = express();
//morgan
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connection to workoutsdb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

//server start
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}!`);
});
