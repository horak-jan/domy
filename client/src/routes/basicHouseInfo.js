const express = require("express");
const BasicHouseInfo = require("../controllers/basicHouseInfo");

const router = express.Router();

//INDEX
router.get("/", BasicHouseInfo.index);

//STORE
router.post("/", BasicHouseInfo.store);

module.exports = router;
