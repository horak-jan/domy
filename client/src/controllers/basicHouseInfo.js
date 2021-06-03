const BasicHouseInfo = require("../models/basicHouseInfo");

// GET api/basicHouseInfo
//  Returns all houses for browse view

exports.index = async (req, res) => {
  try {
    const basicHouseInfo = await BasicHouseInfo.find();

    res.status(200).json({ allHouses: basicHouseInfo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/basicHouseInfo
//  creating new house for view page

exports.store = async (req, res) => {
  try {
    const newBasicHouseInfo = new BasicHouseInfo({ ...req.body });

    const basicHouseInfo = await newBasicHouseInfo.save();

    res
      .status(200)
      .json({ basicHouseInfo: basicHouseInfo, message: "Dům byl přidán" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
