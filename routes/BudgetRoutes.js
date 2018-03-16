const express = require('express');
const Budget = require('../BudgetModel.js');

const router = express.Router();

router.post('/', (req, res) => {
  const budgetData = req.body;
  const budgetNew = new Budget(budgetData);

  budgetNew
    .save()
    .then(addBudget => {
      res.status(200).json(addBudget);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;