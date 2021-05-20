const mongoose = require("mongoose");

const PoolSchema = new mongoose.Schema({
  poolMiddle: [
    {
      src: {
        type: String,
        required: true,
      },
      header: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
  poolBottom: [
    {
      src: {
        type: String,
        required: true,
      },
      headerLarge: {
        type: String,
        required: true,
      },
      headerMedium: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Pool", PoolSchema);
