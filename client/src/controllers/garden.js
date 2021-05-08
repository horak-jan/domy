const Garden = require("../models/garden");

// GET api/garden
//  Returns all garden

exports.index = async (req, res) => {
  try {
    const garden = await Garden.findOne();

    res.status(200).json({ garden: garden });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  PUT api/garden/{id}
//  Update garden

exports.update = async (req, res) => {
  try {
    const update = req.body;
    const id = req.params.id;

    const garden = await Garden.findOneAndUpdate(
      { _id: id },
      { $set: update },
      { new: true }
    );

    if (!garden)
      return res.status(401).json({ message: "Zahrada s tímto ID neexistuje" });

    if (!req.file)
      return res.status(200).json({ garden, message: "Zahrada bylo upraveno" });

    res.status(200).json({
      garden: garden,
      message: "Zahrada byla upravena",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/garden/:id
//  get a single garden

exports.show = async (req, res) => {
  try {
    const id = req.params.id;

    const garden = await Garden.findById(id);

    if (!garden)
      return res.status(401).json({ message: "Zahrada s tímto ID neexistuje" });

    res.status(200).json({ garden });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/garden
//  creating new garden

exports.store = async (req, res) => {
  try {
    const newGarden = new Garden({ ...req.body });

    const garden = await newGarden.save();

    res.status(200).json({ garden: garden, message: "Zahrada přidána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/garden/{id}
//  Delete garden

exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;

    await Garden.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Zahrada smazána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
