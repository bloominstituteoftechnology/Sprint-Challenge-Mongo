
const express = require("express");

const Budget = require('../models/Budget');
const router = express.Router();


router.post('/',(req, res) => {
  const {title, budgetAmount} = req.body;
  
  const newBudget = new Budget({title, budgetAmount});
  if ( title && budgetAmount) {
    console.log(newBudget);
    newBudget
    .save()
    .then(budAmt => {
      console.log(budAmt);
      res.json(budAmt);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating new budget" });
    });
  } else {
    res.status(400).json({
      errorMessage: "Please provide Title and Budget Amount"
    });
  }
  
});
module.exports = router;
