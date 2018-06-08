const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

//End Points
router
  .route('/')
  .get((req, res) => {
    Budget
      .find()
      .then(foundBudgets => 
        res.json(foundBudgets)
      )
      .catch(err => 
        res.status(500).json(err)
      )
  })
  .post((req, res) => {
    const budget = req.body;
    const newBudget = new Budget(budget);
    newBudget
      .save()
      .then(savedBudget => 
        res.status(201).json(savedBudget)
      )
      .catch(err => 
        res.status(422).json({ error: err })
      )
  })


module.exports = router;