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
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongodb connected"));

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//server start
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}!`);
});
