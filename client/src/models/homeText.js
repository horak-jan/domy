const mongoose = require("mongoose");

const HomeTextSchema = new mongoose.Schema({
  bottom: [
    {
      big: String,
      middle: String,
      bottom: String,
    },
  ],
  last: [
    {
      numberAsString: String,
      header: String,
      p: String,
    },
  ],
});

module.exports = mongoose.model("HomeText", HomeTextSchema);
