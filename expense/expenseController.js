const express = require("express");
const router = express.Router();

const Expense = require("./expenseModel.js");

router
  .route("/")
  .post((req, res) => {
    if (
      req.body.amount &&
      req.body.description &&
      req.body.budget &&
      req.body.category
    ) {
      const expense = new Expense(req.body);
      expense.save().then(savedExpense => {
        res.json(savedExpense);
      });
    } else {
      res.status(400).json({
        message: "Error: Please provide Amount, Description, Budget, and Category for expense."
      });
    }
  })
  .get((req, res) => {
    Expense.find({})
      .populate("budget category")
      .then(expenses => {
        res.json(expenses);
      })
      .catch(err => {
        res
          .status(500).json({
            message: "Server Error."
          });
      });
  });

module.exports = router;