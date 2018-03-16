const express = require('express');

const Budget = require('./BudgetModel.js');

const BudgetRouter = express();

BudgetRouter.post('/', (req, res) => {
  const budgetInfo = req.body;
  const newBudget = new BudgetRouter(budgetInfo);

  newBudget
    .save()
    .then(budget => {
      res.status(201).json({ Budget: budget });
    })
    .catch(error => {
      res.status(500).json({ Error: error });
    });
});

module.exports = BudgetRouter;
