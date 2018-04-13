const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./Expense');

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    const newExpense = new Expense(req.body);

    newExpense
      .save()
      .then(reponse => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .get((req, res) => {
    Expense.find({})
      .populate('budget', 'category')
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
