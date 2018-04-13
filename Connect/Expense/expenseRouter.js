const router = require('express').Router();

const expenseModel = require('./expenseModel');

const expense = require('./expenseModel');

// api/expence
router
  .route('/')
    .post((req, res) => {
      const expense = new expenseModel(req.body);

      expense
        .save()
        .then(savedExpense => {
          res.status(201).json(savedExpense);
        })
        .catch(err => {
          res.status(500).json(err);
        });
  });

  module.exports = router;