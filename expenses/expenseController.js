const express = require('express');
const Expense = require('./expenseModel');
const Budget = require('../budget/budgetModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send("Expense router is functional.")
  })

module.exports = router;