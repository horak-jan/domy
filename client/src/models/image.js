const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  imagesGarden: [String],
  imagesWood: [String],
});

module.exports = mongoose.model("Image", ImageSchema);
