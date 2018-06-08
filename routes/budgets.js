const express = require('express');
const router = express.Router();
const Budget = require('../models/budget');

router
  .post('/', (req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });

    newBudget.save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })

module.exports = router;