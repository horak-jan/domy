const mongoose = require("mongoose");

const PresentationSchema = new mongoose.Schema({
  srcImg: {
    type: String,
    required: true,
  },
  altImg: {
    type: String,
    required: true,
  },
  srcIcon: {
    type: String,
    required: true,
  },
  altIcon: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Presentation", PresentationSchema);
