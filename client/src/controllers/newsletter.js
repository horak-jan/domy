const Newsletter = require("../models/newsletter");

// GET api/newsletter
//  Returns all newsletter subsribers

exports.index = async (req, res) => {
  try {
    const newsletter = await Newsletter.find();

    res.status(200).json({ newsletter: newsletter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/newsletter
//  creating new newsletter email subscription

exports.store = async (req, res) => {
  try {
    const newNewsletter = new Newsletter({ ...req.body });

    const newsletter = await newNewsletter.save();

    res.status(200).json({
      newsletter: newsletter,
      message: "Email byl přidán pro zaslání Newsletteru.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/newsletter/{id}
//  Delete Newsletter subscription

exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;

    await Newsletter.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Email byl Newsletteru odstraněn." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
