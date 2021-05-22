const mongoose = require("mongoose");

const PergolaSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true,
  },

  paragraphs: [
    {
      type: String,
      required: true,
    },
  ],

  mainImage: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Pergola", PergolaSchema);
