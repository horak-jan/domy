const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  openingHours: {
    type: String,
    required: true,
  },
  mobil: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Address", AddressSchema);
