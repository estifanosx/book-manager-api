const getAllbooks = (req, res) => {
  res.status(200).json({
    message: "All books retrived sucessfully",
  });
};

module.exports = {
  getAllbooks,
};
