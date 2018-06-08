const express = require('express');

const Expense = require('./expensesModel.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      });
  });

module.exports = router;