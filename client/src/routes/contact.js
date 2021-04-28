const express = require("express");
const Contact = require("../controllers/contact");

const router = express.Router();

//INDEX
router.get("/", Contact.index);

//STORE
router.post("/", Contact.store);

module.exports = router;
