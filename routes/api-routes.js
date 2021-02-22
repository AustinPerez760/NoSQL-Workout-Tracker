const Workout = require("../models/workout.js");
// const router = require("express").Router();

module.exports = function (app) {
  // All workouts
  // app.get("/api/workouts", (req, res) => {
  //   Workout.aggregate([
  //     {
  //       $addFields: {
  //         totalDuration: {
  //           $sum: "$exercises.duration",
  //         },
  //       },
  //     },
  //   ])
  //     .then((dbWorkout) => {
  //       console.log(dbWorkouts);
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.json(err);
  //     });
  // });

  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  //Create new workout
  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
};
