const express = require('express');
const Budget = require('./budget');

const router = express.Router();

router.post('/', (req, res) => {
  const budgetInfo = req.body;
  const { budgetAmount, title } = req.body;
  if (!budgetAmount || !title) {
    res.status(400).json({ errorMessage: 'Please provide a budget title and amount in the request body' });
  }
  const budget = new Budget(budgetInfo);
  budget.save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(err => {
      if (err) {
        res.status(400).json({ errorMessage: 'there was a user error', errorBody: err });
      }
      res.status(500).json({ errorMessage: 'There was an error while saving the budget to the database', err});
    });
});

module.exports = router;
