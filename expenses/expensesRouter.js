const express = require('express');

const Expense = require('./expensesModel.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .select('-_id -__v')
      .populate({ path: 'budget', select: 'title budgetAmount -_id'})
      .populate({ path: 'category', select: 'title -_id'})
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      });
  })
  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });
    if (!amount || !description || !budget || !category) {
      res.status(400).json([{ error: "Missing required information for post." }]);
      return;
    };
    newExpense
      .save()
      .then(() => {
        Expense.find()
          .then(expenses => {
            res.status(200).json(expenses);
          })
          .catch(err => {
            res.status(500).json([{ error: err.message }]);
          })
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }])
      });
  });

router
  .route('/:id')
  .get((req, res) => {

  })

module.exports = router;