const express = require("express");
const House = require("../controllers/house");

const router = express.Router();

//INDEX
router.get("/", House.index);

//STORE
router.post("/", House.store);

//SHOW
router.get("/:id", House.show);

//UPDATE
router.put("/:id", House.update);

//DELETE
router.delete("/:id", House.destroy);

module.exports = router;
