const logger = (req, res, next) => {
  const user = `${req.method} and ${req.url}`;
  console.log(user);

  next();
};

module.exports = logger;
