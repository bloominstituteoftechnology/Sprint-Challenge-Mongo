const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

router
  .post('/', (req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });

    newExpense.save()
      .then(expense => {
        res.status(201).json(expense);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .get('/', (req, res) => {
    Expense.find()
      .populate('budget', {
        title: 1,
        budgetAmount: 1,
        _id: 0
      })
      .populate('category', {
        title: 1,
        _id: 0
      })
      .select({
        amount: 1,
        description: 1,
        budget: 1,
        category: 1,
        _id: 0
      })
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

module.exports = router;