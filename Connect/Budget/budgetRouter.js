const router = require('express').Router();

const budgetModel = require('./budgetModel');

const budget = require('./budgetModel');

// api/budget
router
  .route('/')
    .post((req, res) => {
      const budget = new budgetModel(req.body);

      budget
        .save()
        .then(savedBudget => {
          res.status(201).json(savedBudget);
        })
        .catch(err => {
          res.status(500).json(err);
        });
  });

  module.exports = router;
