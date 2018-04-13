const router = require('express').Router();

const Expense = require('./expenseModel');

router
  .route('/')
  .get((req, res) => {
    Expense.find({})
      .then(expense => {
        res.status(200).json(expense);
      })
      .catch(error => {
        res.status(200).json(error);
      });
  })
  .post((req, res) => {
    const expense = new Expense(req.body);

    expense
      .save()
      .then(savedExpense => {
        res.status(201).json(savedExpense);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;
