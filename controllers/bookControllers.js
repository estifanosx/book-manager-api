const book = require('../data/book')

const getAllbooks = (req, res) => {
  res.status(200).json({
    message: "All books retrived sucessfully",
    data: book
  });
};

module.exports = {
  getAllbooks,
};
