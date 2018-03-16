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

server.post("/category", (req, res) => {
  const { title } = req.body;
  if (title) {
    const category = new Category(req.body);
    category
      .save()
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({ message: "Could not post category" });
      });
  } else {
    res.status(400).json({ error: "You need to put a title for the category" });
  }
});

server.get("/category", (req, res) => {
  Category.find()
    .select({ title: 1, _id: 0 })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get categories" });
    });
});

server.post("/expense", (req, res) => {
  const { amount, description, budget, category } = req.body;
  if (amount && description && budget && category) {
    const expense = new Expense(req.body);
    expense
      .save()
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({ message: "Unable to post expense" });
      });
  } else {
    res.status(400).json({ message: "You must provide all queries" });
  }
});

server.get("/expense", (req, res) => {
  Expense.find()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get expenses" });
    });
});

server.get("/budget/:id/summary", (req, res) => {
  const { id } = req.params;
  Budget.findById(id)
    .then(result => {
      const totalBudget = result.budgetAmount;
      Expense.aggregate({ $group: { _id: null, total: { $sum: "$amount" } } })
        .then(result => {
          const totalExpenses = result[0].total;
          res.send({ budgetBalance: totalBudget - totalExpenses });
        })
        .catch(error => {
          res.status(500).json({ errorMessage: "total expenses get failed" });
        });
    })
    .catch(error => {
      res.status(400).json({ errorMessage: "budget get failed" });
    });
});

mongoose.connect("mongodb://localhost/budget", { useMongoClient: true });

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
