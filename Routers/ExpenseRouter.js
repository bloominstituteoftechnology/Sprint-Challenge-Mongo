const express = require('express');

const Expense = require('../Models/ExpenseModel.js');

const expenseRouter = express.Router();

categoryRouter.get('/', (req, res) => {
    Category.find({})
      .select('title')
      .then(categories => {
        res.status(200).json({ Categories: categories });
      })
      .catch(err => {
        res.status(500).json({ err: 'Error displaying Categories' });
      })
  });
  
  categoryRouter.post('/', (req, res) => {
    const { title } = req.body;
  
    if (!title) {
      res.status(500).json({ err: 'Category Title Required!' });
    }
    const category = new Category({ title });
    category.save()
      .then(savedCategory => {
        res.status(200).json({ CategorySaved: savedCategory });
      })
      .catch(err => {
        res.status(500).json({ err: 'Error saving new Category'});
      })
  });  

module.exports = expenseRouter;