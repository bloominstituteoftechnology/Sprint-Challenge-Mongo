const express = require('express');
const Expense = require('./expenseModel');
const Category = require('../category/categoryModel');
const Budget = require('../budget/budgetModel');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Expense.find({})
      .populate('Category')
      .populate('Budget')
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(error => {
        res.status(500).json({ message: 'Error requesting expenses' });
      });
  })

  .post((req, res) => {
    const newExpense = new Expense(req.body);
    newExpense
      .save()
      .then(savedExpense => {
        res.status(200).json(savedExpense);
      })
      .catch(error => {
        res.status(500).json({ message: 'Error submitting expense' });
      });
  });

module.exports = router;
