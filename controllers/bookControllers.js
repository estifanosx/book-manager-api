const book = require("../data/book");

const getAllbooks = (req, res) => {
  res.status(200).json({
    message: "All books retrived sucessfully",
    data: book,
  });
};

const getBookbyId = (req, res) => {
  const id = Number(req.params.id);

  const getBookId = book.find((book) => book.id === id);
  if (!getBookId) {
   return res.status(404).json({
      message: "book is not found",
    });
  }

  res.status(200).json({
    message: "book is sucessfully retrived",
    data: getBookId,
  });
};

module.exports = {
  getAllbooks,
  getBookbyId,
};
