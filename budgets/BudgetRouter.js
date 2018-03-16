const express = require('express');

const Budget = require('./BudgetModel.js');

const BudgetRouter = express.Router();

BudgetRouter.post('/', (req, res) => {
console.log('ReqQuery', req.query)
  console.log('REQBODY', req.body);
  const budgetInfo = req.query;
  console.log('BUDGET', budgetInfo);
  const newBudget = new Budget(budgetInfo);

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
