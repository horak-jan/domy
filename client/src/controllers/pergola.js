const Pergola = require("../models/pergola");

// GET api/pergola
//  Returns all pergolas

exports.index = async function (req, res) {
  try {
    const pergola = await Pergola.find();

    res.status(200).json({ pergola: pergola });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  PUT api/pergola/{id}
//  Update pergola

exports.update = async function (req, res) {
  try {
    const update = req.body;
    const id = req.params.id;

    const pergola = await Pergola.findOneAndUpdate(
      { _id: id },
      { $set: update },
      { new: true }
    );

    if (!pergola)
      return res.status(401).json({ message: "Pergola s tímto ID neexistuje" });

    if (!req.file)
      return res
        .status(200)
        .json({ pergola, message: "Pergola byla upravena" });

    res.status(200).json({
      pergola: pergola,
      message: "Pergola bylo upravena",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/pergola/:id
//  get a single pergola

exports.show = async function (req, res) {
  try {
    const id = req.params.id;

    const pergola = await Pergola.findById(id);

    if (!pergola)
      return res.status(401).json({ message: "Pergola s tímto ID neexistuje" });

    res.status(200).json({ pergola });
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

//  DESTROY api/pergola/{id}
//  Delete pergola

exports.destroy = async function (req, res) {
  try {
    const id = req.params.id;

    await Pergola.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Pergola byla smazána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
