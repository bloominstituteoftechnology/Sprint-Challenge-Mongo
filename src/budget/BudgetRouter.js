const express = require('express');

const Budget = require('./BudgetModel.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { title, budgetAmount } = req.body;
  if (title && budgetAmount) {
  const budget = new Budget(req.body);
  budget.save()
  .then(budget => res.status(200).json({ success: 'Budget was successfully added.'}))
  .catch(err => res.status(500).json({error: 'There was a problem adding the budget.'}))
  } else res.status(400).json({ error : 'Please provide both the title and budget amount.'})
})

module.exports = router;
