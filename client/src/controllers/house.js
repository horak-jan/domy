const House = require("../models/house");

// GET api/house
//  Returns all houses

exports.index = async (req, res) => {
  try {
    const house = await House.find();

    res.status(200).json({ house: house });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  PUT api/house/{id}
//  Update house

exports.update = async (req, res) => {
  try {
    const update = req.body;
    const id = req.params.id;

    const house = await House.findOneAndUpdate(
      { _id: id },
      { $set: update },
      { new: true }
    );

    if (!house)
      return res.status(401).json({ message: "Dům s tímto ID neexistuje" });

    if (!req.file)
      return res.status(200).json({ house, message: "Dům bylo upraveno" });

    res.status(200).json({
      house: house,
      message: "Dům byl upraven",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/house/:id
//  get a single house

exports.show = async (req, res) => {
  try {
    const id = req.params.id;

    const house = await House.findById(id);

    if (!house)
      return res.status(401).json({ message: "Dům s tímto ID neexistuje" });

    res.status(200).json({ house });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/house
//  creating new house

exports.store = async (req, res) => {
  try {
    const newHouse = new House({ ...req.body });

    const house = await newHouse.save();

    res.status(200).json({ house: house, message: "Dům byl přidán" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/house/{id}
//  Delete house

exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;

    await House.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Dům byl smazán" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
