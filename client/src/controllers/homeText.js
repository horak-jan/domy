const HomeText = require("../models/homeText");

// GET api/hometext

exports.index = async function (req, res) {
  try {
    const homeText = await HomeText.find();

    res.status(200).json({ homeText: homeText });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/hometext
exports.store = async (req, res) => {
  try {
    const newHomeText = new HomeText({ ...req.body });

    const homeText = await newHomeText.save();

    res.status(200).json({ homeText: homeText, message: "Text byl přidán" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
