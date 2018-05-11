// your expense should have a 'post' method for creating the expense. To save an expense you'll need an 'budget' _id and a 'category' _id so that we can build out a relationship between those other collections and our expenses.
// your expense route should also have a 'get' method that returns all the expenses with the populated data.

const express = require('express');
//const router = require("express").Router();
const Expense = require('./expense.js');
const router = express.Router();

//post to /expense
router
.post('/', function(req, res) {
    const expenseData = req.body;
    if (!expenseData.description || !expense.amount || !expense.budget || !expense.category) {
      res.status(400).json({ errorMessage: "Please provide the description and amount of this expense, as well as the expenses budget and category id."}).end();
    }
      const expense = new Expense (expenseData);
      expense
        .save()
        .then(expense => {
          res.status(201).json(expense);
        })
        .catch(err => {
          res.status(500).json({ errorMessage: "There was an error while saving the expense to the database."}).end();
        });
      }
  );

module.exports = router;