const express = require("express");
const router = require("express").Router();
const Expense = require("./Expense");
const Budget = require("../budget/Budget.js");
const Category = require("../category/Category.js");

router
  .route("/")
  .post((req, res) => {
    const newExpense = req.body;
    if (newExpense.amount && newExpense.budget) {
      Budget.findById(newExpense.budget)
        .then(response => {
          if (!response) {
            res.status(404).json({ error: "budget does not exist" });
          } else {
            Expense.create(newExpense)
              .then(response => res.status(200).json(response))
              .catch(err => res.status(500).json({ error: err.message }));
          }
        })
        .catch(err => res.status(500).json({ error: err.message }));
    } else {
      res
        .status(400)
        .json({ error: "Please provide expense amount and budget name" });
    }
  })
  .get((req, res) => {
    Expense.find({})
      .populate("budget", "title")
      .populate("category", "title")
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json({ error: err.message }));
  });

module.exports = router;
