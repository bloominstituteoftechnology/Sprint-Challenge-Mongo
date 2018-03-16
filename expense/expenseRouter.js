const express = require("express");
const Expense = require("./expenseModel");
const Category = require("../category/categoryModel");
const Budget = require("../budget/budgetModel");

const expenseRouter = express.Router();

expenseRouter.post("/", (req, res) => {
  const expenseInfo = req.body;
  const newExpense = new Expense(expenseInfo);

  newExpense
    .save()
    .then(savedExpense => {
      res.status(200).json(savedExpense);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not add the expense.",
      });
    });
});

expenseRouter.get("/", (req, res) => {
  Expense.find({})
    .populate("category")
    .populate("budget")
    .then(expenses => {
      res.status(200).json({ Expenses: expenses });
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not retrieve expenses.",
      });
    });
});

module.exports = expenseRouter;
