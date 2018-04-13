const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

router.route('/').get((req, res) => {
  Budget.find({})
    .then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.route('/').post((req, res) => {
  const budget = new Budget(req.body);

  if (!req.body.title || !req.body.budgetAmount) {
    res.status(400).json({
      errorMesage:
        'Budget title (string) and budgetAmount (number) fields are required.',
    });
    return;
  }

  budget
    .save()
    .then(savedBudget => {
      res.status(201).json(savedBudget);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: 'There was an error saving the budget to the database',
      });
    });
});

module.exports = router;
