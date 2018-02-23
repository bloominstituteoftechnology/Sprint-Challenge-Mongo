const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/budget", { useMongoClient: true });

const Budget = require("./api/models/budget");
const Category = require("./api/models/category");
const Expense = require("./api/models/expense");

server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "The API rises from its slumber" });
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
