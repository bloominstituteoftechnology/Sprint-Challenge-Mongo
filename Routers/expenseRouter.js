const router = require("express").Router();

const Expense = require("../Models/expenseModel.js");

router.post("/", (req, res, next) => {
  const expense = new Expense(req.body);
  expense
    .save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/", (req, res, next) => {
  Expense.find({})
    .select("-__v -_id")
    .populate("budget", "-_id -__v")
    .populate("category", "-_id -__v")
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
