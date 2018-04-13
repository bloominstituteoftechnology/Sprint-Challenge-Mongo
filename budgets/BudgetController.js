const express = require('express');

const Budget = require('./BudgetModel');

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    const budget = new Budget(req.body);
    Budget
      .create(budget)
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).json(error));
  })

module.exports = router;
