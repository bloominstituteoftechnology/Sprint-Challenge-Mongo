import { print } from 'util';

const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./Expense');
const Category = require('../Category/Category');
const Budget = require('../Budget/Budget');

const router = express.Router();

router.post('/', (req, res) => {
  let { amount, description, budget, category } = req.body;
  // find the objectId of the budget provided
  let budgetID = Budget.find({ title: budget });

  budgetID = budgetID.id;

  //find the objectId of the category provided
  let categoryID = Category.find({ title: category });

  categoryID = categoryID.id;
  const expense = new Expense({
    amount: amount,
    description: description,
    budget: mongoose.Types.ObjectId(budgetID),
    category: mongoose.Types.ObjectId(categoryID)
  });
  expense
    .save()
    .then(response => {
      res.status(200).json({ success: 'saved expense!' });
    })
    .catch(error => res.status(400).json(error));
});

router.get('/', (req, res) => {
  Expense.find({})
    // .select()
    .populate('budget', 'category')
    .then(expenses => res.send(expenses))
    .catch(err => res.send(404).json(err));
});

module.exports = router;
