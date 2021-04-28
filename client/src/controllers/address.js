const Address = require("../models/address");

// GET api/address

exports.index = async function (req, res) {
  try {
    const address = await Address.find();

    res.status(200).json({ address: address });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/address

exports.store = async (req, res) => {
  try {
    const newAddress = new Address({ ...req.body });

    const address = await newAddress.save();

    res.status(200).json({
      address: address,
      message: "Adresa pobočky přidána",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
