const express = require('express');

const Expense = require('../Models/expenseModel');

const router = express.Router();

router.post('/', (req, res) => {
  const exp = new Expense(req.body);

  exp.save()
    .then(exp => {
      res.status(200).send(exp);
    })
    .catch(err => {
      err.status(400).send({ msg: 'There was an error saving that expense', error: err });
    });
});

router.get('/', (req, res) => {
  Expense.find()
    .populate('budget')
    .populate('category')
    .then(exp => {
      res.status(200).send(exp);
    })
    .catch(err => {
      res.status(400).send({ msg: 'There was an error fetching those expenses', error: err });
    });
});

module.exports = router;