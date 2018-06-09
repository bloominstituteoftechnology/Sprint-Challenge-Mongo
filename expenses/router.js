const express = require('express')
const Expense = require('./model.js');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Expense.find()
     .populate('budget', 'budgetAmount -_id').populate('category', 'title -_id')
     .then(expenses => {
       res.status(200).json(expenses)
     })
     .catch(error => {
      res.status(500).json(error);
     })
  })
  .post((req, res) => {
    const data = req.body;
    const expense = new Expense(data);

    expense.save()
      .then(expense => {
        res.status(201).json(expense);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })

module.exports = router;
