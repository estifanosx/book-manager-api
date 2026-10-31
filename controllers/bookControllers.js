const book = require("../data/book");

const getAllbooks = (req, res) => {
  const bookauthor = req.query.author;

  if (!bookauthor) {
    return res.status(200).json({
      message: "All books retrieved successfully",
      data: book,
    });
  }

  const filterbook = book.filter(
    (book) => book.author.toLowerCase() === bookauthor.toLowerCase(),
  );

  if (filterbook.length === 0) {
    return res.status(404).json({
      message: "Book Match not found",
    });
  }
  res.status(200).json({
    message: "book match is found",
    data: filterbook,
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

const updateBook = (req, res) => {
  const Id = Number(req.params.id);
  const findbook = book.findIndex((book) => book.id === Id);

  if (findbook === -1) {
    return res.status(404).json({
      message: "Book is Not Found",
    });
  }

  const updatedBook = {
    ...book[findbook],

    ...req.body,
    id: Id,
  };

  book[findbook] = updatedBook;

  res.status(200).json({
    message: "Book is sucessfully updated",
    data: updatedBook,
  });
};

const deleteBook = (req, res) => {
  const Id = Number(req.params.id);
  const deletedBook = book.findIndex((book) => book.id === Id);

  if (deletedBook === -1) {
    return res.status(404).json({
      message: "Book is not found",
    });
  }

  const removedBook = book.splice(deletedBook, 1)[0];

  res.status(200).json({
    message: "book is sucessfully deleted",
    data: removedBook,
  });
};

module.exports = {
  getAllbooks,
  getBookbyId,
  addBook,
  updateBook,
  deleteBook,
};
