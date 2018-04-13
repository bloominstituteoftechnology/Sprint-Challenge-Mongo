const express = require("express");
const router = express.Router();

const Expense = require("./expenseModel.js");

router
  .route("/")
  .post((req, res) => {
    const expense = new Expense(req.body);
    expense.save().then(savedExpense => {
      res.json(savedExpense);
    });
  })
  .get((req, res) => {
    Expense.find({})
      .populate("budget category")
      .then(expenses => {
        res.json(expenses);
      });
  });

module.exports = router;
