const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    deault: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Type of excersise is required",
      },

      name: {
        type: String,
        trim: true,
        required: "Name of excersise is Required",
      },

      duration: {
        type: Number,
        required: "Duration of excersise is required",
      },
      distance: {
        type: Number,
      },

      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
