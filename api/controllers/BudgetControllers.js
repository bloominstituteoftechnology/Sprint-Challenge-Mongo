const express = require('express');
const router = express.Router();
const Budget = require('../models/BudgetModels.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router.post('/', function(req, res) {
  const { title, budgetAmount } = req.body;
  const newBudget = { title, budgetAmount };
  newBudget._id = ObjectId();
  const budget = new Budget(newBudget);
  budget.save();
  res.send(budget);
})

module.exports = router;
