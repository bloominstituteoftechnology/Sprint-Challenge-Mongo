const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./Expense');

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    if (
      req.body.amount &&
      req.body.description &&
      req.body.budget &&
      req.body.category
    ) {
      const newExpense = new Expense(req.body);

      newExpense
        .save()
        .then(reponse => {
          res.status(200).json(response);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    } else {
      res
        .status(404)
        .json({ messsage: 'User error: Not all required fields completed.' });
    }
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
