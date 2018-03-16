const express = require('express');
const router = express.Router();
const Expense = require('../models/ExpenseModels.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Budget = require('../models/BudgetModels.js');

router.post('/', function(req, res) {
  const { amount, description, budget } = req.body;
  const newExpense = { amount, description, budget };
  newExpense._id = ObjectId();
  Budget.findOne({title: req.body.budget})
  .then(budget => res.send(budget))

//newExpense.budget = ObjectId();
  //const expense = new Expense(newExpense);
//  expense.save();
//  res.send(newExpense);
})

module.exports = router;
