const router = require('express').Router();
const Expense = require('./expense.js');
const Budget = require('./Budget.js');
const Category = require('./Category.js');
router
  .route('/')
  .get((req, res) => {
    Expense.find(req.query)
      .populate('budget')
      .populate('category')
      .then(expense => res.json(expense))
      .catch(err => res.status(500).json(err => {
        error: err.message
      }));
  })
  .post((req, res) => {
    const {
      amount,
      description,
      budget,
      category
    } = req.body;
    Expense.create({
        amount,
        description,
        budget,
        category
      })

      .then(expense => res.status(201).json(expense))
      .catch(err => res.status(500).json(err => {
        error: err.message
      }));
  })

module.exports = router;