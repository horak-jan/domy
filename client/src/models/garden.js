const mongoose = require("mongoose");

const GardenSchema = new mongoose.Schema({
  gardenSlide: [
    {
      imgSrc: {
        type: String,
        required: true,
      },
      header: {
        type: String,
        required: true,
      },
      shortText: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
  images: [String],
});

module.exports = mongoose.model("Garden", GardenSchema);
