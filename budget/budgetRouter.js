const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

// add endpoints here
router.get('/', (req, res) => {
  Budget.find()
    .then(budget => {
      console.log(budget);
      res.status(200).json(budget)
    })
    .catch(err => {
      res.status(404).json({ errorMessage:  "Budget not found." });
    })
})

router.post('/', (req, res) => {
  const budgetData = req.body;

  const budget = new Budget(budgetData);
  budget
    .save()
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(400).json({ errorMessage: "Please provide a title and an amount to create a budget." })
      } else {
        res.status(500).json({ errorMessage: "There was an error while creating your new budget." });
      }
    })
})

module.exports = router;
