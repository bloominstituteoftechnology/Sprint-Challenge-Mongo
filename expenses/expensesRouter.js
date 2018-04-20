const express = require('express');

const Expense = require('./Expense');
const Category = require('../categories/Category');
const Budget = require('../budgets/Budget');

const router = express.Router();

router.route('/').get((req, res) => {
  Expense.find({})
    .populate('budget category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.route('/').post((req, res) => {
  const { category, budget, amount, description } = req.body;
  const expense = new Expense(req.body);

  if (!amount || !description) {
    res.status(400).json({
      errorMessage:
        'Expense amount (number) and description (string) are required fields.',
    });
    return;
  }

  if (!category) {
    res.status(400).json({
      errorMessage: 'Expense category (string) is a required field.',
    });
    return;
  }

  if (!budget) {
    res.status(400).json({
      errorMessage: 'Expense must be assigned a budget (string)',
    });
    return;
  }

  const findCategory = Category.find({ title: category });
  const findBudget = Budget.find({ title: budget });

  Promise.all([findCategory, findBudget])
    .then(data => {
      const category_id = data[0][0]._id;
      const budget_id = data[1][0]._id;

      expense.budget = budget_id;
      expense.category = category_id;
      expense.save().then(res.status(201).json(expense));
    })
    .catch(err => res.status(500).json(err));
});
module.exports = router;
