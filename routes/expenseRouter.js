const express = require('express');
const mongoose = require('mongoose');

const Expense = require('../modules/expenseModule');
const Category = require('../modules/categoryModule');
const Budget = require('../modules/budgetModule');

const router = express.Router();

router.get('/', (req, res) => {
  Expense.find({})
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.post('/', (req, res) => {
  let budgetId;
  let categoryId;
  Category.find({ category: req.body.category })
    .then(response => {
      response.map(category => {
        return (categoryId = category.id);
      });
      Budget.find({ budget: req.body.budget })
        .then(response => {
          response.map(budget => {
            return (budgetId = budget.id);
          });
          Expense.create({
            amount: req.body.amount,
            description: req.body.description,
            budget: mongoose.Types.ObjectId(budgetId),
            category: mongoose.Types.ObjectId(categoryId),
          })
            .then(response => {
              console.log(response);
              res.status(200).json({ success: 'saved expense!' });
            })
            .catch(error => {
              res.status(400).json(error);
            });
        })
        .catch(err => {
          res.status.json(err);
        });
    })
    .catch(err => {
      res.status(200).json(err);
    });
});

module.exports = router;
