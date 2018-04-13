const express = require('express');

const Expense = require('./Expense');

const router = express.Router();

router.route('/').get((req, res) => {
  Expense.find({})
    .populate('budget category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
