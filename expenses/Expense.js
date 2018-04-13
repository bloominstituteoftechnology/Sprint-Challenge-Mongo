// Express
const router = require('express').Router();

// Model
const Expense = require('./expenseModel');

// endpoint /api/budgets

router
  .route('/')
  .get((req, res) => {
    Expense.find({})
      .populate('category budget', { _id: 0, title: 1 })
      .select('amount description')
      .then((expenses) => {
        res.status(200).json(expenses);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    console.log(req.body);
    const expense = new Expense(req.body);

    expense
      .save()
      .then((savedExpense) => {
        res.status(201).json(savedExpense);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

module.exports = router;
