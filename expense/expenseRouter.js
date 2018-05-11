const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();
// your expense should have a 'post' method 
// for creating the expense. 
// To save an expense you'll need an 
// 'budget' _id and a 'category' _id 
// so that we can build out a relationship 
// between those other collections and our expenses.
router.route('/').post((req, res) =>{
    const expenseData = req.body;
    const expense = new Expense(expenseData);
    Expense
          .save()
          .then(expense => {
              res.status(201).json(expenses);
          })
          .catch(err => {
              res.status(500).json(err)
          });
});

// your expense route should also have
//  a 'get' method that returns all the 
//  expenses with the populated data.