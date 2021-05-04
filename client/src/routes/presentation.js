const express = require("express");
const Presentation = require("../controllers/presentation");

const router = express.Router();

//INDEX
router.get("/", Presentation.index);

//STORE
router.post("/", Presentation.store);

//DELETE
router.delete("/:id", Presentation.destroy);

module.exports = router;
