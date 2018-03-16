const express = require("express"); // remember to install your npm packages
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();
server.use(bodyParser.json());

//models
const Budget = require("./models/BudgetModel.js");
const Category = require("./models/CategoryModel.js");
const Expense = require("./models/ExpenseModel.js");

//middleware

//Port
const PORT = process.env.PORT || 8000;
mongoose.Promise = global.Promise;
// add your server code

server.post("/budget", (req, res) => {
  const { title, budgetAmount } = req.body;

  if (title && budgetAmount) {
    const budget = new Budget(req.body);
    budget
      .save()
      .then(savedBudget => {
        res.status(201).json(savedBudget);
      })
      .catch(error => {
        res.status(500).json({
          errorMessage: "There was a problem saving the budget to the database."
        });
      });
  } else {
    res.status(400).json({
      errorMessage: "You must provide both a title and budgetAmount."
    });
  }
});

server.get("/budget", (req, res) => {
  Budget.find()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error getting your entries" });
    });
});
mongoose.connect("mongodb://localhost/budget", { useMongoClient: true });

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
