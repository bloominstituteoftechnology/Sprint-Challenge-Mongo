const express = require('express');

const Expense = require('./Expense');

const router = express.Router();

router.route('/')
  .get(function (req, res) {
    Expense
      .find()
      .populate('budget')
      .populate('category')
      .then(expense => res.json(expense))
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post(function (req, res) {
    const expenseInfo = req.body;

    const expense = new Expense(expenseInfo);

    expense
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;