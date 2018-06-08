const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

//End Points
router
  .route('/')
  .get((req, res) => {
    Expense
      .find()
      .select('-_id -__v')
      .populate('budget category', '-_id -__v -budgetAmount')
      .then(foundExpenses => 
        res.json(foundExpenses)
      )
      .catch(err => 
        res.status(500).json(err)
      )
  })
  .post((req, res) => {
    const expense = req.body;
    const newExpense = new Expense(expense);
    newExpense
      .save()
      .then(saveExpense => 
        res.status(201).json(saveExpense)
      )
      .catch(err => 
        res.status(422).json({ error: err })
      )
  })


module.exports = router;