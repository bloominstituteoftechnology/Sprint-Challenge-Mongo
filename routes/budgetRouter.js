const express = require('express');
const router = express.Router();

const Budget = require('../models/budget.js');
const Expense = require('../models/expense.js');

router.post('/', (req, res) => {
  const budgetItem = req.body;
  const budget = new Budget(budgetItem);

  budget.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json({ error: err }).end());
});

router.get('/:id/summary', (req, res) => {
  const { id } = req.params;

  Budget.findById(id).then(budget => {
    Expense.aggregate([
      { $group: { _id: 'amount', total: { $sum: '$amount' } } },
    ])
      .then(total => {
        const totalExpenses = total[0].total;
        const totalBudget = budget.budgetAmount;
        const remainingBudget = totalBudget - totalExpenses;
        res.json({ totalBudget, totalExpenses, remainingBudget });
      })
      .catch(err => res.status(500).json({ error: err }));
  });
});

module.exports = router;
