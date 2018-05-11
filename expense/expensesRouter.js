const express = require('express');
const router = express.Router();

const Expense = require('./expenseModel');

router.route('/')
  .get((req, res) => {
    Expense.find()
      .populate('budget category')
      .then(expenses => res.json(expenses))
      .catch(err => res.status(500).json(err));
  })
  .post((req, res) => {
    const expense = new Expense(req.body);
    expense.save()
      .then(expense => res.status(201).json(expense))
      .catch(err => res.status(500).json(err));
  })

module.exports = router;