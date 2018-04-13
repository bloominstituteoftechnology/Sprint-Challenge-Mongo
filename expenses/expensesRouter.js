const express = require('express');
const router = express.Router();

const Expense = require('./Expense');

const Budget = require('../budgets/Budget');
const Category = require('../categories/Category');

router

  .route('/')

  .get((req, res) => {
    Expense.find({})
      .populate('Budget Category')
      .then(expenses => {
        res.status(200).json({ Expenses: expenses });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

  .post((req, res) => {
    const expense = new Expense(req.body);
    expense
      .save()
      .then(savedExpense => {
        res.status(201).json(savedExpense);
      })
      .catch(err => res.status(500).json(err));
  });

module.exports = router;
