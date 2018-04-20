const express = require('express');

const Expense = require('./expenseModel.js');
const Budget = require('../budget/BudgetModel.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { category, budget, amount } = req.body;
  if (category && budget && amount) {
    const expense = new Expense(req.body);
    expense
      .save()
      .then((expense) =>
        res.status(200).json({ success: 'Expense was successfully added.' })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ error: 'There was a problem adding the expense.' })
      );
  } else
    res
      .status(400)
      .json({ error: 'Please provide a budget ID, category ID, and amount.' });
});

router.get('/', (req, res) => {
  Expense.find()
    .populate('budget', 'title')
    .populate('category', 'title')
    .then((expenses) => res.status(200).json(expenses))
    .catch((err) => res.status(500).json({ err: err.message }));
});

router.get('/:id/summary', (req, res) => {
  const id = req.params.id;
  Expense.aggregate([
    {
      $group: {
        _id: null,
        expenseTotal: { $sum: '$amount' },
      },
    },
  ]).then((sum) => {
    Budget.findById(id)
    .then(budget => {
      const difference = budget.budgetAmount - sum[0].expenseTotal;
      const budgetSummary = {
        BudgetSummary: {
        budget: budget.budgetAmount,
        expenses: sum[0].expenseTotal,
        difference: difference,
        }
      }
      res.status(200).json(budgetSummary)
    })
  });
});

module.exports = router;
