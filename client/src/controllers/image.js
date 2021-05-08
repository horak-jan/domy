const Image = require("../models/image");

// GET api/image
//  Returns all images for woodwork and gardens

exports.index = async (req, res) => {
  try {
    const image = await Image.findOne();

    res.status(200).json({ image: image });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/garden/:name
//  get a single image array

exports.show = async (req, res) => {
  try {
    const name = req.params.name;

    const image = await Image.find(name);

    if (!image)
      return res
        .status(401)
        .json({ message: "Galerie s tímto jménem neexistuje" });

    res.status(200).json({ image });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/image
//  creating new image arraz

exports.store = async (req, res) => {
  try {
    const newImage = new Image({ ...req.body });

    const image = await newImage.save();

    res.status(200).json({ image: image, message: "Galerie přidána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
