const express = require("express");
const Address = require("../controllers/address");

const router = express.Router();

//INDEX
router.get("/", Address.index);

//STORE
router.post("/", Address.store);

module.exports = router;
