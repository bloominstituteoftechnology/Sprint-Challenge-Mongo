const express = require('express');

const Expense = require('./ExpenseSchema');

const router = express.Router();

router.post('/', (req, res) => {
  const expense = new Expense(req.body);
  expense
    .save()
    .then(response => {
      res.status(200).json({ success: 'saved expense!' });
    })
    .catch(error => res.status(400).json(error));
});

router.get('/', (req, res) => {
  Expense.find({})
    .select('title')
    .then(expenses => res.send(expenses))
    .catch(err => res.send(404).json(err));
});

module.exports = router;
