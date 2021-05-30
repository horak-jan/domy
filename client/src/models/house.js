const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    sqMetresToUse: {
      type: Number,
      required: true,
    },
    sqMetresToBuild: {
      type: Number,
      required: true,
    },
    rooms: {
      type: String,
      required: true,
    },
    bills: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    fullHousePrices: {
      perMonth: {
        type: String,
        required: true,
      },
      total: {
        type: String,
        required: true,
      },
    },
    basicHousePrices: {
      perMonth: {
        type: String,
        required: true,
      },
      total: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("House", HouseSchema);
