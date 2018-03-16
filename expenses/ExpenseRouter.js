const express = require('express');
const mongoose = require('mongoose');

const Expense = require('./ExpenseModel.js');
const Budget = require('../budgets/BudgetModel.js');
const Category = require('../categories/CategoryModel.js');

const ExpenseRouter = express.Router();

//Unsurprisingly, body is undefined...
//I don't think I'm providing the body any differently
//than normal... this is annoying.
ExpenseRouter.post('/', (req, res) => {
  const { amount, description, budgetID, categoryID } = req.query;
  const budObjID = mongoose.Types.ObjectId(budgetID);
  const catObjID = mongoose.Types.ObjectId(categoryID);
  const newExpense = new Expense({ amount, description, budget: budObjID, category: catObjID });

  newExpense
    .save()
    .then(expense => res.status(201).json(expense))
    .catch(error => res.status(500).json(error));
});

module.exports = ExpenseRouter;
