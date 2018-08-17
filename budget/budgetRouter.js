const express = require('express');
const budget = require('./budget.js');
const router = express.Router();

router
.post((req, res) => {
  const {title, budgetAmount} = req.body;
  if (title && budgetAmount) {
    res.json({message: 'Success'})
  } else {
    res.json({errorMessage: 'Need to have both title and budget amount'});
  }
  const newBudget = new budget({title, budgetAmount});
  newBudget.save()
    .then(result =>{
      res.json ({message: 'Successful save'})
    .catch(error => {
      res.json({errorMessage: 'Error in saving. Please try again.'})
    })
    })
})

module.exports =router;