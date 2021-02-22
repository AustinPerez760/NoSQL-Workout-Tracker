const Workout = require("../models/workout.js");
const router = require("express").Router();

// All workouts
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkout) => {
      console.log(dbWorkouts);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Create new workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
