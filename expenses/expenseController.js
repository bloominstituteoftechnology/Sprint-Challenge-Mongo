const express = require('express');
const Expense = require('./expenseModel');
const Budget = require('../budget/budgetModel');
const Category = require('../category/categoryModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Expense
      .find()
      .populate('budget', '-_id title')
      .populate('category', '-_id title')
      .then(expense => res.status(200).json(expense))
      .catch(err => res.status(500).json(err))
  })

  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const expense = new Expense(req.body);
    expense
      .save()
      .then(expense => res.status(201).json(expense))
      .catch(err => res.status(500).json("Error."))
  })

module.exports = router;