const router = require('express').Router();

const Expense = require('./expenseModel');
const Category = require('../category/categoryModel');
const Budget = require('../budget/budgetModel');

router
  .route('/')
  .get((req, res) => {
    Expense
    .find()
    .populate('budget')
    .populate('category')
    .then(expenses => {
        res.status(200).json(expenses);
    })
    .catch(err => {
        res.status(500).json(err);
    });
  })
  .post((req, res) => {
      const expense = new Expense(req.body);
      expense
      .save()
      .then(expc => {
        res.status(200).json(expc);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;