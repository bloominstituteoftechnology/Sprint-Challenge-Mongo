const router = require('express').Router();
const Expense = require('./expenseModel');
const Category = require('../category/categoryModel');
const Budget = require('../expense/expenseModel');

router
  .route('/')
  .get((req, res) => {
    Expense.find({})
    .populate('category')
    .populate('budget')
    .then(expenses => {
      res.status(200).json({Expenses: expenses});
    })
    .catch(error => {
      res.status(500).json(error);
    });
  })
  .post((req, res) => {
    const expenses = new Expense(req.body);
    expenses.save()
    .then(saveExpense => {
      res.status(200).json(saveExpense);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  module.exports = router;