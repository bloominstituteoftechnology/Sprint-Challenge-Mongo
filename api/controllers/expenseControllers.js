const mongoose = require('mongoose');

const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
  const {
    amount,
    description,
    budget,
    category
  } = req.body;
  const expense = new Expense(req.body);

  if (!amount || !description || !budget || !category) {
    res.status(500).json({ error: "All fields are required to create an expense: Amount, Description, Budget, and Category" });
  } else {
    expense
      .save()
      .then(savedExpense => {
        res.status(200).json(savedExpense);
      }).catch(error => {
        res.status(500).json({ error: "Could not create a new expense." })
      })
  }
}

const getExpense = (req, res) => {
  Expense.find()
    .populate('budget category')
    .then(expenses => {
      res.status(200).json(expenses);
    }).catch(error => {
      res.status(500).json({ error: "Failed to get expenses" });
    })
}

module.exports = expenseCreate, getExpense;