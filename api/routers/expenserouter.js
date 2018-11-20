const express = require('express');
const Expense = require('./Expense.js');
const Budget = require('../budgets/Budget.js');
const Category = require('../categories/Category.js');
const router = express.Router();

router
  .route('/expense')
  .post((req, res) => {
    const expenseData = ({ amount, description, budget, category } = req.body)
    const newExpense = new Expense(expenseData);
    if (!amount || !description || !budget || !category) {
      res
        .status(400)
        .json({
          userError: 'Need amount, description, budget, and category.'
        });
    } else {
      newExpense
        .save()
        .then(expense => {
          res.status(201).json(expense)
        })
        .catch(err => {
          res.status(500).json({ 
            error: err.message
           })
        })
    }
  })

  .get((req, res) => {
    Expense.find()
      .select('amount category budget description -_id')
      .populate('budget', 'title amount -_id')
      .populate('category', 'title -_id')
      .then(expenses => {
        res.status(200).json(expenses)
      })
      .catch(err => {
        res.status(500).json({ 
          error: err.message 
        })
      })
  })

module.exports = expenserouter;
