const mongoose = require('mongoose');
const Expense = require('../models/expense');
const Category = require('../models/category');

const createExpense = (req, res) => {
  const expenseInfo = req.body;
  const { amount, description, budget, category } = req.body;
  const expense = new Expense(expenseInfo);

  if (!amount || !description || !budget || !category) {
    res.status(500).json({error: 'You must provide the amount, description, budget, and category for each expense.'});
  } else {
    expense.save()
      .then(addedExpense => {
        res.status(200).json(addedExpense);
      })
      .catch(error => {
        res.status(500).json({error: 'There was a problem adding the new expense.'});
      })
  }
};

const expenses =  (req, res) => {
  Expense.find()
    .populate('budget category', 'title budgetAmount')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json({error: 'There was a problem getting all of your expenses.'});
    })
};

const expenseAggregation = (req, res) => {
  const { aggregatedBy } = req.query;

  if (!aggregatedBy) {
    res.status(500).json({error: 'You must provide an aggregation query in the search'});
  } else {
    Expense.aggregate([{
      $group: {
       _id: '$category',
       expenses: {
         $sum: '$amount'
       }
      }}
    ])
    .sort('-expenses')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json({error: 'Server error getting you your aggregated categories.'});
    })
  }
};

module.exports = {
  createExpense,
  expenses,
  expenseAggregation
}