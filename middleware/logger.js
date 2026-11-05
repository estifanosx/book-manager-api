const logger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    const method = req.method;
    const url = req.originalUrl;
    const status = res.statusCode;

    const timeStamp = new Date(startTime).toISOString();

    console.log(
      `${method} , url:${url} , statusCode:${status} , ${timeStamp} , duration ${duration}`,
    );
  });

  next();
};

module.exports = logger;
