const express = require('express');

const Expense = require('./Expense');

const router = express.Router();

const queryFilter = require('../queryFilter/queryFilter');

router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .populate('category', 'title')
      .populate('budget', 'title budgetAmount')
      .then(response => {
        res.json(queryFilter(response, req.query));
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const newItem = new Expense(req.body);
    newItem
      .save()
      .then(response => {
        res.json(response);
      })
      .catch(err => res.status(500).json(err));
  });

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Expense.findById(id)
      .populate('category', 'title')
      .populate('budget', 'title budgetAmount')
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    Expense.findByIdAndRemove(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
