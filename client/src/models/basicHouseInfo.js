const mongoose = require("mongoose");

const BasicHouseInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
    oneTimePaymentPrice: {
      type: Number,
      required: true,
    },
    basicHousePrices: [
      {
        type: String,
      },
    ],
    fullHousePrices: [
      {
        type: String,
      },
    ],
    id: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BasicHouseInfo", BasicHouseInfoSchema);
