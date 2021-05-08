const Contact = require("../models/contact");

// GET api/contact

exports.index = async (req, res) => {
  try {
    const contact = await Contact.find();

    res.status(200).json({ contact: contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/contact

exports.store = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });

    const contact = await newContact.save();

    res.status(200).json({
      contact: contact,
      message:
        "Děkujeme za projevenou důvěru, zanedlouho Vás budeme kontaktovat.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
