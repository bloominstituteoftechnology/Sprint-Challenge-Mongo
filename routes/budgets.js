const express = require('express');
const Budget = require('../models/Budget');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Budget.find()
      .then(budgets => {
        res.status(200).json(budgets)
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })
  .post((req, res) => {
    const data = req.body;
    let budget = new Budget(data);

    budget.save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(error => {
       res.status(500).json(error);
      })
  })

module.exports = router;