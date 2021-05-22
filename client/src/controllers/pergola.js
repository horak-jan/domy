const Pergola = require("../models/pergola");

// GET api/pergola
//  Returns all pergolas

exports.index = async (req, res) => {
  try {
    const pergola = await Pergola.find();

    res.status(200).json({ pergola: pergola });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/pergola
//  creating new pergola

exports.store = async (req, res) => {
  try {
    const newPergola = new Pergola({ ...req.body });

    const pergola = await newPergola.save();

    res.status(200).json({ pergola: pergola, message: "Pergola přidána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
