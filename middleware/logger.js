const logger = (req, res, next) => {
  const startTime = new Date();
  res.on("finish", () => {
    const method = req.method;
    const url = req.originalUrl;
    const status = res.statusCode;

    const timeStamp = startTime.toISOString();

    console.log(`${method} , url:${url} , statusCode:${status} , ${timeStamp}`);
  });

  next();
};

module.exports = logger;
