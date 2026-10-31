const express = require("express");
const router = express.Router();
const validateBook = require("../middleware/validateBook");
const {
  getAllbooks,
  getBookbyId,
  addBook,
} = require("../controllers/bookControllers");

router.get("/", getAllbooks);
router.get("/:id", getBookbyId);
router.post("/", validateBook, addBook);

module.exports = router;
