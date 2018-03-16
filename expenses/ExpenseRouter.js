const express = require('express');
const mongoose = require('mongoose');

const Expense = require('./ExpenseModel.js');
const Budget = require('../budgets/BudgetModel.js');
const Category = require('../categories/CategoryModel.js');

const ExpenseRouter = express.Router();

//Unsurprisingly, body is undefined...
//I don't think I'm providing the body any differently
//than normal... this is annoying.
//example: localhost:5000/expense?amount=100&description=platter&budgetID=5aabee9238f12329282daee1&categoryID=5aabf3a19cd26d15f84d013a
ExpenseRouter.post('/', (req, res) => {
  //Really not sure if this is how you are supposed to do it
  //Only way that made sense to me, though I'm guessing there
  //is a better way.
  const { amount, description, budgetID, categoryID } = req.query;
  const budObjID = mongoose.Types.ObjectId(budgetID);
  const catObjID = mongoose.Types.ObjectId(categoryID);
  const newExpense = new Expense({ amount, description, budget: budObjID, category: catObjID });

  newExpense
    .save()
    .then(expense => res.status(201).json(expense))
    .catch(error => res.status(500).json(error));
});

ExpenseRouter.get('/', (req, res) => {
  Expense.find({})
    .populate('budget', 'title budgetAmount')
    .populate('category', 'title')
    .then(expenses => res.status(200).json(expenses))
    .catch(error => res.status(500).json(error));
});

module.exports = ExpenseRouter;
