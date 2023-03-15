const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const { contactsRouter, usersRouter, authRouter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const { errorHandler } = require("./helpers");

app.use(express.static("public"));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
