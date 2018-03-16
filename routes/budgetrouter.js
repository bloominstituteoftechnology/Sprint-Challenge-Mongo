
const express = require("express");

const Budget = require('../models/Budget');
const router = express.Router();


router.post('/budget',(req, res) => {
  const {title, budgetAmount} = req.body;
  
  const newBudget = new Budget({title, budgetAmount});
  if ( title && budgetAmount) {
  } else {
    res.status(400).json({
      errorMessage: "Please provide Title and Budget Amount"
    });
  }
  newBudget
    .save()
    .then(budAmt => {
      console.log(budAmt);
      res.json(budAmt);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating new budget" });
    });
});
module.exports = router;
