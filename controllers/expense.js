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
        Budget.findById(id)
          .then(budget => {
            budget.budgetAmount -= newExpense.amount;
            budget.save();
          })
          .then(() => {
            Expense.find()
              .select('-_id -__v')
              .populate('budget', '-_id -__v')
              .populate('category', '-_id -__v')
              .then(expenses => {
                res.status(201).send({ newExpense, allExpenses: expenses });
              });
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

module.exports = router;
