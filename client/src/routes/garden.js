const express = require("express");
const Garden = require("../controllers/garden");

const router = express.Router();

//INDEX
router.get("/", Garden.index);

//STORE
router.post("/", Garden.store);

//SHOW
router.get("/:id", Garden.show);

//UPDATE
router.put("/:id", Garden.update);

//DELETE
router.delete("/:id", Garden.destroy);

module.exports = router;
