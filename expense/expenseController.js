const express = require("express");
const router = express.Router();
const Expense = require("./expenseModel.js");

router
  .get("/", (req, res) => {
    Expense.find({})
      .populate("budget category")
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error getting the expenses from the server."
        });
      });
  })
  .post("/", (req, res) => {
    if (
      req.body.amount &&
      req.body.description &&
      req.body.budget &&
      req.body.category
    ) {
      const expense = new Expense(req.body);
      expense.save().then(savedExpense => {
        res.status(201).json(savedExpense);
      });
    } else {
      res.status(400).json({
        message:
          "Please provide an amount, description, budget, and category for your expense."
      });
    }
  });

module.exports = router;
