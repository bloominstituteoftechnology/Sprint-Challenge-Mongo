const router = require('express').Router();
const Expense = require('../models/expenseModel.js');

router
  .route('/')
  .get((req,res) => {
    //==>
    Expense.find(req.query)
      .populate('budget')
      .populate('category')
      .then(expense => res.json(expense))
      .catch(err => res.status(500).json(err => { error: err.message }));
  })
  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    //==>
    Expense.create({ amount, description, budget, category })
      // .populate('budget')
      // .populate('category')
      .then(expense => res.status(201).json(expense))
      .catch(err => res.status(500).json(err => { error: err.message }));
  })

module.exports = router;
/*
'/expenses'
  your expense should have a 'post' method for creating the expense. To save an expense you'll need an 'budget' _id and a 'category' _id so that we can build out a relationship between those other collections and our expenses.
  your expense route should also have a 'get' method that returns all the expenses with the populated data.
*/