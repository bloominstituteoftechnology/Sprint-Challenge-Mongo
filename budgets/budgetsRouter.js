const express = require('express');

const Budget = require('./budgetsModel.js');
const Expense = require('../expenses/expensesModel.js');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Budget.find()
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      })
  })
  .post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
    if (!title || !budgetAmount) {
      res.status(400).json([{ error: "Missing required information." }]);
      return;
    }
    newBudget
      .save()
      .then(() => {
        Budget.find()
          .then(budgets => {
            res.status(200).json(budgets);
          })
          .catch(err => {
            res.status(500).json([{ error: err.message }]);
          })
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    let expenses;
    let difference = 0;
    Budget.findById(id)
      .then(budget => {
        Expense.find({ budget: id })
          .then(result => {
            expenses = result;
            let prunedExp = [];
            // console.log("Budget is ", budget);
            let netAmount = budget.budgetAmount;
            // console.log("Init Amount ", initAmount)
            expenses.forEach((exp, index) => {
              // console.log(exp, initAmount)
              netAmount -= exp.amount
              prunedExp.push({expense: expenses[index].description,
                              value: expenses[index].amount})
            })
            res.status(200).send([{ 
              budgetName: budget.title,
              initialBudget: budget.budgetAmount,
              itemsPurchased: prunedExp,
              totalExpenses: budget.budgetAmount - netAmount,
              netAmount
             }])
            console.log(netAmount)
          })
          .catch(err => {
            res.status(500).json([{ error: err.message }])
          })
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      })
  })

module.exports = router;