const Presentation = require("../models/presentation");

// GET api/presentation
//  Returns all

exports.index = async (req, res) => {
  try {
    const presentation = await Presentation.find();

    res.status(200).json({ presentation: presentation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/presentation
//  creating new garden

exports.store = async (req, res) => {
  try {
    const newPresentation = new Presentation({ ...req.body });

    const presentation = await newPresentation.save();

    res
      .status(200)
      .json({ presentation: presentation, message: "Presentace přidána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/presentation/{id}
//  Delete Presentation

exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;

    await Presentation.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Presentace smazána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
