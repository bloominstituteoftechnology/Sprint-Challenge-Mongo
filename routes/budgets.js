const express = require('express');
const router = express.Router();
const Budget = require('../models/budget');
const Expense = require('../models/expense');

router
  .post('/', (req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });

    newBudget.save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })
  .get('/',  (req, res) => {
    Expense.aggregate()
      .group({
        _id: "$budget",
        total: { $sum: "$amount" }
      })
      .lookup({
        from: "budgets",
        localField: "_id",
        foreignField: "_id",
        as: "budgetDetails"
      })
      .unwind("$budgetDetails")
      .project({
        _id: 0,
        title: "$budgetDetails.title",
        budgetAmount: "$budgetDetails.budgetAmount",
        totalExpenses: "$total",
        amountRemaining: { $subtract: ["$budgetDetails.budgetAmount", "$total"] }
      })
      .then(results => {
        res.send(results);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

module.exports = router;