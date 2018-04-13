const express = require('express');

const Expense = require('./Expenses.js');

const router = express.Router();

router
.route('/')
.get((req, res) => {
  Expense.find({}).populate('budget category', {
    title: 1,
  })
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
  .then(newExpense => {
    res.status(201).json(newExpense);
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;