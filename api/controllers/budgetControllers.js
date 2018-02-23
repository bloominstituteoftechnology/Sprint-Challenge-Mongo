const mongoose = require('mongoose');

const Budget = require('../models/budget');
const Expense = require('../models/expense');

const createBudget = (req, res) => {
  const budget = new Budget(req.body);

  budget
    .save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating budget', err });
    });
};

const getBudgets = (req, res) => {
  Budget.find()
    .then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

const getBudgetSummary = (req, res) => {
  const { id } = req.params;

  Budget.findById(id).then(budgetResult => {
    const budget = budgetResult.budgetAmount;
    Expense.aggregate({
      $group: {
        _id: id,
        totalExpenses: {
          $sum: '$amount',
        },
      },
    })
      .then(results => {
        console.log(results);
        res.status(200).json({ balance: budget - results[0].totalExpenses });
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
};

module.exports = {
  createBudget,
  getBudgets,
  getBudgetSummary,
};
