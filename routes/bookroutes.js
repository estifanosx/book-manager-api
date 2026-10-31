const express = require("express");
const router = express.Router();

const {
  getAllbooks,
  getBookbyId,
  addBook,
} = require("../controllers/bookControllers");

router.get("/", getAllbooks);
router.get("/:id", getBookbyId);
router.post("/", addBook);

module.exports = router;
