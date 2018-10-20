const express = require('express');

const Budget = require('./BudgetModel.js');

const BudgetRouter = express.Router();

BudgetRouter.post('/', (req, res) => {
  Budget.create(req.body)
    .then(budget => res.status(201).json(budget))
    .catch(err => res.status(500).json(err));
});

module.exports = BudgetRouter;
