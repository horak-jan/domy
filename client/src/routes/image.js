const express = require("express");
const Image = require("../controllers/image");

const router = express.Router();

//INDEX
router.get("/", Image.index);

//STORE
router.post("/", Image.store);

//SHOW
router.get("/:name", Image.show);

module.exports = router;
