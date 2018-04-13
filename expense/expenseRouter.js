const express = require('express');
const router = express.Router();

const Expense = require('./Expense');


router
  .route('/')
  .post((req, res) => {
    const expense = new Expense(req.body);
    
    expense.save()
    .then(newExpense => {
      res.status(200).json(newExpense);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  })
  .get((req, res) => {
    Expense.find({}).populate('budget category')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  });
  
  module.exports = router