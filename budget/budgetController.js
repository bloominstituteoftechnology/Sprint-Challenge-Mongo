const express = require('express');
const BudgetRouter = express.Router();
const Budget = require('./budgetModel');


BudgetRouter.post('/', (req,res) => {
  const BudgetInfo = req.body;
  const newBudget = new Budget(BudgetInfo);
  newBudget
    .save()
    .then(savedBudget => {
      res.status(200).json(savedBudget);
    })
    .catch(err => {
      res.status(500).json({error: 'There was an error saving your budget to the database'})
    })
})
module.exports = BudgetRouter;