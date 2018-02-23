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

server.post("/budget", (req, res) => {
  const { title, startingAmount } = req.body;
  const budget = new Budget(req.body);
  if (title && startingAmount) {
    budget
      .save()
      .then(savedBudget => {
        res.status(201).json(savedBudget);
      })
      .catch(error => {
        res
          .status(500)
          .json({
            error: "There was an error saving this budget to the database"
          });
      });
  } else {
    res.status(404).json({ error: "Please provide a budget title and amount" });
  }
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
