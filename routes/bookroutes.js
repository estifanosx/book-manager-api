const express = require("express");
const router = express.Router();
const validateBook = require("../middleware/validateBook");
const {
  getAllbooks,
  getBookbyId,
  addBook,
  updateBook,
  deleteBook,
 
} = require("../controllers/bookControllers");

router.get("/", getAllbooks);
router.get("/:id", getBookbyId);
router.post("/", validateBook, addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
