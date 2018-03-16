const express = require('express');
const mongoose = require('mongoose');

const Expense = require('../models/expense');
const Budget = require('../models/budget');
const Category = require('../models/category');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  const id = info.budget;

  if (info) {
    expense = new Expense(info);
    expense
      .save()
      .then(newExpense => {
        Expense.find()
          .select('-_id -__v')
          .populate('budget', '-_id -__v')
          .populate('category', '-_id -__v')
          .then(expenses => {
            res.status(201).send({ newExpense, allExpenses: expenses });
          });
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

router.get('/', (req, res) => {
  const { aggregatedBy } = req.query;
  if (!aggregatedBy) {
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
  } else {
    // Trying to work on the final stretch assignment
    Category.findOne({ title: aggregatedBy }).then(category => {
      const id = category._id;
      Expense.aggregate([
        { $match: { category: id } },
        { $group: { _id: 'amount', total: { $sum: '$amount' } } }
      ]).then(response => {
        Expense.find()
          .select('category amount')
          .populate('category', '-_id -__v')
          .then(allExpenses => {
            res.send({ response, allExpenses });
          });
      });
    });
  }
});

module.exports = router;
