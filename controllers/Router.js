const express = require('express');
const Router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose')



const BudgetModel = require('../Budget/budgetModel.js');
const CategoryModel = require('../Category/CategoryModel.js');
const ExpenseModel = require('../Expense/ExpenseModel.js');

const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;
const STATUS_SEVER_ERROR = 500;
const STATUS_CREATED_SUCCESS = 201;
const STATUS_OK = 200;




Router.post('/budget', (req, res) => {
    const { title, budgetAmount} = req.body;
    if (title && budgetAmount) {
      const budget = new Budget(req.body);
    budget
      .save()
      .then((savedBudget) => {
        res.status(STATUS_CREATED_SUCCESS).json(savedBudget);
      })
      .catch((err) => {
        res.status(STATUS_SEVER_ERROR).send({
          error: 'There was an error while saving new Budget to the Database',
        });
      });
  } else {
    res.status(STATUS_BAD_REQUEST).json({
      errorMessage: 'Please provide both title and amount for the Budget.',
    });
  }
});

Router.post('/category', (req, res) => {
  const { title } = req.body;
  if (title) {
    const category = new CategoryModel(req.body);
    category
      .save()
      .then((category) => 
        res.status(200).json({ success: 'Your new category has sucessfully been added' })
        .catch((err) =>
        res
          .status(500)
          .json({ error: 'There was a problem adding the category.' })
      ));
  } else res.status(400).json({ error: 'Please provide the category title.' });
});

Router.get('/category', (req, res) => {
  Category.find()
    .select('title')
    .then((categories) => res.status(200).json(categories))
    .catch((err) => res.status(500).json({ err: err.message }));
});

Router.post('/expense', (req, res) => {
  const expense = new Expense(req.body);
  expense
    .save()
    .then(expense => {
      res.json(expense);
    })
    .catch(err => {
      res.status(500).json({msg: 'There was an error saving this expense.'});
    });
});

Router.get('/expense', (req, res) => {
  Expense.find()
    .populate('category', 'title')
    .populate('budget', 'title budgetAmount')
    .then(expenses => {
      res.json(expenses);
    })
    .catch(err => {
      res.status(500).json({msg: 'There was an error retrieving your expenses'});
    });
});

module.exports = Router;