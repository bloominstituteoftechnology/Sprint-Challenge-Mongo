const express = require('express');
const Budget = require('./budget');

const router = express.Router();

router.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget
    .save()
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(errorSavingBudget => {
      res.status(500).json(errorSavingBudget);
    });
});

module.exports = router;
