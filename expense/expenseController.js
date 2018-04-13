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
      expense.save().then(item => {
        console.log("Expense Saved")
        res.json(item);
      });
    } else {
      res.status(400).json({ message: "Please provide an amount, description, budget, and category for your expense." });
    }
  })
  .get((req, res) => {
    Expense.find({})
      .populate("budget category")
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        res.status(500).json({ message: "There was an error getting the expenses from the server." });
      });
  });

module.exports = router;