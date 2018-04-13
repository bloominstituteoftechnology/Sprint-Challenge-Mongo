const router = require('express').Router();

const Budget = require('./budgetModel');

router.route('/').post((req, res) => {
  const budget = new Budget(req.body);
  bear
    .save()
    .then(savedBudget => {
      res.status(201).json(savedBudget);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
