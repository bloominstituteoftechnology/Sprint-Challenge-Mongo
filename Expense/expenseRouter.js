const express = require('express');
const Expense = require('./expense');

const router = express.Router();

router.get('/', (req, res) => {
  Expense.find({})
    .populate('budget category')
    .then(expenses => {
      res.status(200).json( { expenses: expenses });
    })
    .catch(err => {
      res.status(500).json({ error: 'The information could not be retrieved' });
    });
});

router.post('/', (req, res) => {
  const { amount, description, budget, category } = req.body;
  if (!amount || !description) {
    res.status(400).json({ errorMessage: 'Please provide an amount and description in the request body' });
  }
  const expense = new Expense({
    budget,
    category,
    amount,
    description,
  });
  expense.save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(err => {
      if (err) {
        res.status(400).json({ errorMessage: 'there was a user error', errorBody: err });
      }
      res.status(500).json({ errorMessage: 'There was an error while saving the expense to the database', err});
    });
});

module.exports = router;
