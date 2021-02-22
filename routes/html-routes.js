const router = require("express").Router();
const path = require("path");

// Route to display homepage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// Route to add exercise
router.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "NoSQL-Workout-Tracker/public/exercise.html")
  );
});
// Stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
