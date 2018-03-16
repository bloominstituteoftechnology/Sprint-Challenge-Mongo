const express = require('express');

const Budget = require('../models/budget');
const Expense = require('../models/expense');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  if (info) {
    budget = new Budget(info);
    budget
      .save()
      .then(newBudget => {
        res.status(201).send(newBudget);
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

router.get('/:id/summary', (req, res) => {
  const { id } = req.params;
  Budget.findById(id).then(budget => {
    Expense.aggregate([
      { $group: { _id: 'amount', total: { $sum: '$amount' } } },
    ])
      .then(total => {
        const TotalExpenses = total[0].total;
        const TotalBudget = budget.budgetAmount;
        const RemainingBudget = TotalBudget - TotalExpenses;
        res.send({ TotalBudget, TotalExpenses, RemainingBudget });
      })
      .catch(err => res.send(err));
  });
});

module.exports = router;
