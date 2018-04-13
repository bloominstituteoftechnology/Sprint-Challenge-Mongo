const express = require('express');
const Router = express.Router();

const Expenses = require('../models/ExpensesModel');
const budget = require('../models/BudgetModel');
const category = require('../models/CategoryModel');

Router.route('/')
  .get((req, res) => {
    Expenses.find({})
      .populate('budget', 'title budgetAmount -_id')
      .populate('category', 'title -_id')
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    Expenses.create(req.body)
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = Router;
