const express = require('express');
const router = express.Router();

const Categories = require('../categories/categories');
const Expenses = require('../expenses/expenses');
const Budget = require('../budgets/budgets');

router.post('/', function post(req, res) {
    const expensesData = req.body;
    const expenses = new Expenses(expensesData);
  
    expenses
      .save()
      .then(expenses => {
        res.status(201).json(expenses);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  router.get('/', function get(req, res) {
    Expenses
      .find()
    //   .select('title')
    .populate('category')
    .populate('budget')
      .then(expensess => {
        res.status(200).json(expensess);
      });
  });
  module.exports = router;
