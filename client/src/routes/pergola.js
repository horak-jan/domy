const express = require("express");
const Pergola = require("../controllers/pergola");

const router = express.Router();

//INDEX
router.get("/", Pergola.index);

//STORE
router.post("/", Pergola.store);

module.exports = router;
