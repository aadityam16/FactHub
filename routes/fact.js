const express = require("express");
const router = express.Router();
const factController = require("../controllers/fact");
const { getFacts, addFact, updateFact } = factController;
router.get("/", getFacts).post("/", addFact).patch("/:id", updateFact);

exports.router = router;
