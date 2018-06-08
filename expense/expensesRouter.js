const express = require("express");
const Expense = require("./Expense");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Expense.find()
      .populate("budget", "title budgetAmount")
      .populate("category", "title")
      .then(expenses => res.json(expenses))
      .catch(err => res.status(500).json({ error: err.message }));
  })
  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    if (!amount || !description) {
      res.status(400).json({
        error: "Please provide a description and an amount for your expense."
      });
    } else {
      const newExpense = new Expense({ amount, description, budget, category });
      newExpense
        .save()
        .then(expense => res.status(201).json(expense))
        .catch(err => res.status(500).json({ error: err.message }));
    }
  });

module.exports = router;
