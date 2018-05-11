const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./Expense.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { amount, description, budget, category } = req.body;
  if (amount && description && budget && category) {
    const posted = new Expense({
      amount: amount,
      description: description,
      budget: budget,
      category: category
    })
    posted.save()
      .then(result => res.status(201).json(result))
      .catch(err => res.status(500).json(err));
  } else {
    res.status(400).json({msg: 'amount, description, budget, and category fields required'});
  }
})

router.get('/', (req, res) => {
  Expense.find().populate('budget').populate('category')
    .then(expenses => res.status(200).json(expenses))
    .catch(err => res.status(500).json(err));
})

module.exports = router;