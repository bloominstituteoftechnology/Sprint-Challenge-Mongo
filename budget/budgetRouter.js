const express = require('express');
const router = express.Router();

const Budget = require('./budgetModel.js');

router.post('/', (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(addBudget => {
      res.status(200).json(addBudget);
    })
    .catch(error => {
      res
        .status(500)
        .json({ Message: 'There was an error saving to database.' });
    });
});

module.exports = router;
