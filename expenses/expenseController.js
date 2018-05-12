const express = require('express');
const Expense = require('./expenseModel');
const Budget = require('../budget/budgetModel');
const Category = require('../category/categoryModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Expense
      .find() // returns array of expenses
      .populate({ path: 'budget', select: 'title -_id' })
      .populate({ path: 'category', select: { title: 1, _id: 0 } })
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

router.route('/:id')
  .get((req, res) => {
    Expense
      .findById(req.params.id)
      .populate('budget')
      .populate('category')
      .then(expense => res.status(200).json(expense))
      .catch(err => res.status(500).json(err))
  })

  .delete((req, res) => {
    Expense
      .findOneAndRemove({ _id: req.params.id })
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json({ error: "Cannot remove expense with the provided ID." }))
  })

module.exports = router;