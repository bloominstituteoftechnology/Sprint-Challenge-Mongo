const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router
.route('/')
.get((req, res) => {
  Budget.find({})
  .then(budgets => {
    res.status(200).json(budgets);
  })
  .catch(err => {
    res.status(500).json(err);
  });
})
.post((req, res) => {
  const budget = new Budget(req.body);
  
  budget // need to use budget (ref to the new Budget) NOT Budget -- save is a method on the model, not the schema
  .save()
  .then(newBudget => {
    res.status(201).json(newBudget);
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;