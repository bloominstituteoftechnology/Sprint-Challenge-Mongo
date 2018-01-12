const mongoose = require('mongoose');
const Expense = require('../models/expense');
const Category = require('../models/category');

const expenseCreate = (req, res) => {
  const expense = req.body;
  const newExpense = new Expense(expense);
  newExpense.save()
    .then((expense) => {
      if (!expense) throw new Error('No expense created');
      res.status(201).json({ message: 'Expense created successfully' });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

const expenseList = (req, res) => {
  Expense.find({})
    .populate(['budget', 'category'])
    .then((expenses) => {
      if (expenses.length === 0) throw new Error('Expenses retrieved failed');
      res.status(200).json(expenses);
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

const categorySpend = (req, res) => {
  const category = req.query.aggregatedBy;

};

module.exports = {
  expenseCreate,
  expenseList,
  categorySpend
};