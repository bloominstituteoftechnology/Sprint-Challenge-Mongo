const express = require('express');
const Budget = require('../models/budget.js');

const BudgetRouter = express.Router();

BudgetRouter
  .route('/budget')
  .post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
    if (!title || !budgetAmount) {
      res.status(400).json({
        userError: 'Please provide a title and amount for your budget'
      });
    } else {
      newBudget
        .save()
        .then(budget => {
          res.status(201).json(budget);
        })
        .catch(err => {
          res.status(500).json({
            error: err.message
          });
        });
    }
  })

  .get((req, res) => {
    Budget.find()
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        });
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Budget.findOne({ _id: { $eq: ObjectId(id) } })
      .then(budget => {
        let totalSpent = 0;
        Expense.find({ budget: { $eq: ObjectId(id) } })
          .then(expenses => {
            totalSpent = expenses.reduce((acc, curr) => {
              return acc + curr.amount;
            }, 0);
            const remaining = budget.budgetAmount - totalSpent;
            res.json({ ...budget._doc, remainingBalance: remaining });
          })
          .catch(err => {
            res.status(500).json({
              error: err.message
            })
          })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  })

  .put((req, res) => {
    const { id } = req.params;
    const changes = ({ budgetAmount, title } = req.body);
    Budget.findByIdAndUpdate(id, changes, { new: true })
      .then(updatedBudget => {
        res.status(200).json(updatedBudget)
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  })

  .delete((req, res) => {
    const { id } = req.params
    Budget.findByIdAndRemove(id)
      .then(deletedBudget => {
        res.status(200).json(deletedBudget);
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  })

module.exports = budgetrouter;
