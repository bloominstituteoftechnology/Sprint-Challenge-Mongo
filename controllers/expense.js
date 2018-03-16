const express = require('express');
const mongoose = require('mongoose');

const Expense = require('../models/expense');
const Budget = require('../models/budget');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  const id = info.budget;

  if (info) {
    expense = new Expense(info);
    expense
      .save()
      .then(newExpense => {
        Expense.find()
          .select('-_id -__v')
          .populate('budget', '-_id -__v')
          .populate('category', '-_id -__v')
          .then(expenses => {
            res.status(201).send({ newExpense, allExpenses: expenses });
          });
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

router.get('/', (req, res) => {
  Expense.find()
    .select('-_id -__v')
    .populate('budget', '-_id -__v')
    .populate('category', '-_id -__v')
    .then(expenses => {
      res.send(expenses);
    })
    .catch(err => {
      res.send({ error: err });
    });
});

router.get('/:id/summary', (req, res) => {
  const { id } = req.params;
  Budget.findById(id).then(budget => {
    Expense.aggregate([
      { $group: { _id: 'amount', total: { $sum: '$amount' } } },
    ])
      .then(total => {
        const RemainingBudget = budget.budgetAmount - total[0].total;
        res.send({
          TotalBudget: budget.budgetAmount,
          TotalExpenses: total[0].total,
          RemainingBudget,
        });
      })
      .catch(err => res.send(err));
  });
});

module.exports = router;
