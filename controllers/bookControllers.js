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

const addBook = (req, res) => {
  const newId = book.length + 1;
  const newBook = {
    id: newId,
    ...req.body,
  };
  book.push(newBook);

  res.status(201).json({
    message: "Book is added in the Library",
    data: newBook,
  });
};

module.exports = {
  getAllbooks,
  getBookbyId,
  addBook,
};
