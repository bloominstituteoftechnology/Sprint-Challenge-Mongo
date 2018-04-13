const router = require('express').Router();

const Expense = require('../Models/Expense');

router
    .route('/')
    .get((req, res) => {
        Expense.find({})
        .then(expenses => {
          res.status(200).json(expenses);
        })
        .catch(err => {
          res.status(404).json(err);
        })
      })
    .post((req, res) => {
        const expense = new Expense(req.body)
        expense.save()
        .then(savedExpense => {
          res.status(201).json(savedExpense);
        })
        .catch(err => {
          res.status(500).json(err);
        })
      });

module.exports = router;