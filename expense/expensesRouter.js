const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .populate('budget category')
      .then( expense => {
        res.status(200).json(expense);
      })
      .catch( err => {
        res.status(500).json({error: 'Error retrieving info from database', err})
      })
  })

router
  .route('/')
  .post((req, res) => {
    const expenseData = req.body;
    const { description, amount, budget, category } = req.body;
    
    if (!description || !amount || !budget || !category) {
      return res.status(400).json({error: 'Please provide required info'})
    }
    const expense = new Expense(expenseData);
    expense.save()
      .then( expense => {
        res.status(201).json(expense);
      })
      .catch( err => {
        res.status(500).json({error: 'Error posting to database', err});
      })
  });

module.exports = router;
