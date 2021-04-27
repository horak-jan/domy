const express = require("express");
const HomeText = require("../controllers/homeText");

const router = express.Router();

//INDEX
router.get("/", HomeText.index);

//STORE
router.post("/", HomeText.store);

module.exports = router;
