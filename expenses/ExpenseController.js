const express = require('express');

const Expense = require('./ExpenseModel');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Expense
      .find()
      .then(expenses => res.status(200).json(expenses))
      .catch(error => res.status(500).json(error));
  })
  .post((req, res) => {
    const expense = new Expense(req.body);

    Expense
      .create(expense)
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).json(error))
  })
module.exports = router;
