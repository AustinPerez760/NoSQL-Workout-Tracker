const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
      distance: Number,
      weight: Number,
      reps: Number,
      setes: Number,
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);
module.exports = workout;
