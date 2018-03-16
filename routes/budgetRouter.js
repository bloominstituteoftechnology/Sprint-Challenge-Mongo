const express = require('express');
const router = express.Router();

const Budget = require('../models/budget.js');

router.post('/', (req, res) => {
  const budgetItem = req.body;
  const budget = new Budget(budgetItem);

  budget.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
