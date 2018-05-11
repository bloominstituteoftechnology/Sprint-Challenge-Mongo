const express = require("express");

const Expense = require("./expenseModel");

const router = express.Router();

router.get("/", (req, res) => {
  let query = Expense.find()
  .select("amount description budget category") //selector;

  
  query
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Expense.findById(id)
  .select("amount description budget category") //selector
  .populate("budget", "title budgetAmount") // populator
  .populate("category", "title")
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const expenseInput = req.body;
  const expense = new Expense(expenseInput);

  expense
    .save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;