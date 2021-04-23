const mongoose = require("mongoose");

const GardenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    sqMetres: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    price: [
      {
        type: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Garden", GardenSchema);
