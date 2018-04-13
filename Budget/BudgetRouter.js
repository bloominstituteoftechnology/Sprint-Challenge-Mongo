const express = require('express');

const Budget = require('./BudgetSchema');

const router = express.Router();

router.post('/', (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(response => {
      res.status(200).json({ success: 'saved budget!' });
    })
    .catch(error => res.status(400).json(error));
});

module.exports = router;
