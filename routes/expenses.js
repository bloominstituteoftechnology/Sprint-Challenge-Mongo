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

module.exports = router;