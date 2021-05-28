const express = require("express");
const BasicHouseInfo = require("../controllers/basicHouseInfo");

const router = express.Router();

//INDEX
router.get("/", House.index);

//STORE
router.post("/", House.store);

module.exports = router;
