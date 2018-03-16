const express = require('express');

const Expense = require('./expenseModel.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { category, budget, amount } = req.body;
  if (category && budget && amount) {
    const expense = new Expense(req.body);
    expense
      .save()
      .then((expense) =>
        res.status(200).json({ success: 'Expense was successfully added.' })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ error: 'There was a problem adding the expense.' })
      );
  } else res.status(400).json({ error: 'Please provide a budget ID, category ID, and amount.' });
});

router.get('/', (req, res) => {
  Expense.find()
    .then((expenses) => res.status(200).json(expenses))
    .catch((err) => res.status(500).json({ err: err.message }));
});

module.exports = router;
