const express = require('express');

const Expense = require('./Expense.js');
const Budget = require('../budget/Budget.js');
const Category = require('../category/Category.js');

const router = express.Router();

router
  .route('/')
  .get((req,res) => {
    Expense.find({})
      .populate('budget')
      .populate('category')
  
  .then(expenses => {
    res.status(200).json(expenses);
  })

  .catch(err => {
    res.status(500).json(err);
  })

});

router.route('/')

  .post((req,res) => {
    // budgetId = 5ad0d8dad9f9546150247ae6
    // categoryId = 5ad0e26de6a2e67280847c40
    const expense = new Expense(req.body);
    const { amount, description, budget, category } = req.body;
    expense
      .save()
      .then(savedExpense => {
        res.status(201).json(savedExpense);
      })
      .catch(err => res.status(500).json(err));

  });


module.exports = router;