const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

// add endpoints here
router.get('/', (req, res) => {
  Expense.find()
    .populate('budget', 'title -_id')
    .populate('category', 'title -_id')
    .then(expenses => {
      console.log(expenses);
      res.status(200).json(expenses)
    })
    .catch(err => {
      res.status(404).json({ errorMessage:  "Expenses not found." });
    })
})

router.post('/', (req, res) => {
  const expenseData = req.body;

  const expense = new Expense(expenseData);
  expense
    .save()
    .then(expense => {
      res.status(201).json(expense);
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(400).json({ errorMessage: "Please provide all necessary expense information." })
      } else {
        res.status(500).json({ errorMessage: "There was an error while creating your new expense." });
      }
    })
})

module.exports = router;
