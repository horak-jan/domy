const Pool = require("../models/pool");

// GET api/pool
//  Returns one pool

exports.index = async (req, res) => {
  try {
    const pool = await Pool.findOne();

    res.status(200).json({ PoolPageData: pool });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/pool
//  creating new pool

exports.store = async (req, res) => {
  try {
    const newPool = new Pool({ ...req.body });

    const pool = await newPool.save();

    res
      .status(200)
      .json({ PoolPageData: pool, message: "Info k bazénům přidáno" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
