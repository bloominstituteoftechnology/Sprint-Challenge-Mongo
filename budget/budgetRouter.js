const express = require('express');

const Budget = require('./budgetModel');

const router = express.Router();

router.post('/', function(req, res) {
  const budgetInfo = req.body
  const newBudget = new Budget(budgetInfo);
  newBudget
    .save()
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error creating product', error: err })
    });
});

module.exports = router;
