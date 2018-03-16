const express = require('express');

const Budget = require('./BudgetModel.js');

const router = express.Router();

router.post('/budget', (req, res) => {
  const budgetInfo = req.body;

  const budget = new Budget(budgetInfo);

  budget
    .save()
    .then(savedBudget => {
      res.status(201).json(savedBuget);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error creating budget', error: err})
    });
});

module.exports = router;
