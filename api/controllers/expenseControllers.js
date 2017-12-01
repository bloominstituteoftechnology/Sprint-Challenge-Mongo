const Expense = require('../models/expense');
const Category = require('../models/category');

const expenseCreate = (req, res) => {
  const { ammount, description, budget, category } = req.body;
  const newExpense = Expense({ ammount, description, budget, category });

  newExpense
    .save()
    .then(nExpense => res.status(201).json(nExpense))
    .catch(err => res.status(500).json(err));
};
const expensesGet = (req, res) => {
  Expense.find({})
    .populate('budget category')
    .exec()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(500).json(err));
};
/*
'/expenses?aggregatedBy=category'
*/
const expensesAggregatedBy = (req, res) => {
  Expense
    .aggregate([
      { $group: { _id: '$category', total: { $sum: '$ammount' } } },
      { $sort: { total: -1 } },
    ])
    .exec()
    .then(value => res.json(value))
    .catch(err => res.status(500).json(err));
};

module.exports = { expenseCreate, expensesGet, expensesAggregatedBy };
