const express = require('express');
const router = express.Router();

const Categories = require('../categories/categories');
const Expenses = require('../expenses/expenses');
const Budget = require('../budgets/budgets');

router.post('/', function post(req, res) {
    const budgetData = req.body;
    const budget = new Budget(budgetData);
  
    budget
      .save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  
  router.get('/', function get(req, res) {
    Budget
      .find()
      .then(budgets => {
        res.status(200).json(budgets);
        // res.status(200).json("no need to write a getter or even update the budget total directly");

      });
  });
  module.exports = router;
