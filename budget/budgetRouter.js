const express = require('express');
const Budget = require('./Budget.js');

// Middleware
const router = express.Router();

// POST to create an initial budget
router.post('/', (req, res) => {
    const budgetData = req.body;
    const budget = new Budget(budgetData);
  
    budget
    .save()
    .then(budget => {
      res.json({budget})
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router;   
