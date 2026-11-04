const express = require("express");
const bookRoutes = require("./routes/bookRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);
app.use(errorHandler);

module.exports = app;
