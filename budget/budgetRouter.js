const express = require('express');
const router = express.Router();

const Budget = require('./Budget');

router
  .route('/')
  .post((req, res) => {
    const budget = new Budget(req.body);
    
    budget.save()
    .then(newBudget =>{
      res.status(200).json(newBudget);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  });
  
  
module.exports = router;