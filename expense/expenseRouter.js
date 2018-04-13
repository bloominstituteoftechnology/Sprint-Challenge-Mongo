const express = require('express');
const router = express.Router();

const Expense = require('./expenseModel.js');

router.post('/', (req, res) => {
  const expense = new Expense(req.body);
  expense
    .save()
    .then(newExpense => {
      res.status(200).json(newExpense);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/', (req, res) => {
  Expense.find({})
    .populate('budget category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
