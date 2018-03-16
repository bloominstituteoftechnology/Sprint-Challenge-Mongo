const express = require('express');

const Expense = require('../models/expense');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  if (info) {
    expense = new Expense(info);
    expense
      .save()
      .then(newExpense => {
        res.status(201).send(newExpense);
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

router.get('/', (req, res) => {
  Expense.find()
    .select('-_id -__v')
    .populate('budget', '-_id -__v')
    .populate('category', '-_id -__v')
    .then(expenses => {
      res.send(expenses);
    })
    .catch(err => {
      res.send({ error: err });
    });
});

module.exports = router;
