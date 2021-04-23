const express = require("express");
const Pergola = require("../controllers/pergola");

const router = express.Router();

//INDEX
router.get("/", Pergola.index);

//STORE
router.post("/", Pergola.store);

//SHOW
router.get("/:id", Pergola.show);

//UPDATE
router.put("/:id", Pergola.update);

//DELETE
router.delete("/:id", Pergola.destroy);

module.exports = router;
