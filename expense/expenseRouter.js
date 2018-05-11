const express = require('express');

const Expense = require('./expenseModel');

const router = express.Router();

router.post('/', function(req, res) {
  const expenseInfo = req.body;
  const newExpense = new Expense(expenseInfo);

  newExpense
    .save()
    .then(expense => {
      res.status(201).json(expense);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error creating expense', error: err });
    });
});

router.get('/', function (req, res) {
  
  Expense
    .find()
    .select('-__v -_id')
    .populate('budget', '-__v -_id')
    .populate('category', 'title -_id')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error getting expenses', error: err });
    });

})

module.exports = router;
