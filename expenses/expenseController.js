const express = require('express');
const Expense = require('./expenseModel');
const Budget = require('../budget/budgetModel');
const Category = require('../category/categoryModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Expense
      .find() // returns array of expenses
      .populate({ path: 'budget category', select: 'title -_id' })
      .then(expense => res.status(200).json(expense))
      .catch(err => res.status(500).json(err))
  })

  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    Expense
      .create(req.body) // returns a promise
      .then(expense => res.status(201).json(expense))
      .catch(err => res.status(500).json("Error."))
  })

router.route('/:id')
  .get((req, res) => {
    Expense
      .findById(req.params.id)
      .populate({ path: 'budget category', select: 'title -_id' }) // successfully updated both budget and category
      .then(expense => res.status(200).json(expense))
      .catch(err => res.status(500).json(err))
  })

  .delete((req, res) => {
    Expense
      .findOneAndRemove({ _id: req.params.id })
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json({ error: "Cannot remove expense with the provided ID." }))
  })

  .put((req, res) => {
    Expense
      .findByIdAndUpdate(req.params.id, req.body, { new: true }) // returns updated object when 'new' is set to true
      .populate({ path: 'budget category', select: { title: 1, _id: 0 } })
      .then(updated => res.status(200).json(updated))
      .catch(err => res.status(500).json({ error: "Invalid input. Check ID and updated fields." }))
  })

module.exports = router;