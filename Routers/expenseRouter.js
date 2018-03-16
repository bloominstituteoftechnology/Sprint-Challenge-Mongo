const express = require('express');

const Expense = require('../Models/expenseModel');

const router = express.Router();

router.post('/', (req, res) => {
  const exp = new Expense(req.body);

  exp.save()
    .then(res => {
      res.status(200).send(res);
    })
    .catch(err => {
      res.status(400).send('There was an error saving that budget', err);
    });
});

router.get('/', (req, res) => {
  Expense.find()
    .populate('budget')
    .populate('category')
    .then(cats => {
      res.status(200).send(cats);
    })
    .catch(err => {
      res.status(400).send('Error fetching categories');
    });
});

module.exports = router;