const express = require("express");
const Pool = require("../controllers/pool");

const router = express.Router();

//INDEX
router.get("/", Pool.index);

//STORE
router.post("/", Pool.store);

module.exports = router;
