const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    sqMetres: {
      type: Number,
      required: true,
    },

    rooms: {
      type: String,
      required: true,
    },
    zastaveno: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    prices: [
      {
        type: Number,
      },
    ],
    hypoteka: {
      type: String,
      required: true,
    },
    naklady: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("House", HouseSchema);
