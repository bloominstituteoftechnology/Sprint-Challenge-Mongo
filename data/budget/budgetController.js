const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Budget = require('./Budget.js');

router
.route('/')
.post( (req,res)=>{
  const budget = new Budget(req.body);
  budget.save().then(savedBudget =>{
    res.status(200).json(savedBudget);
  })
  .catch(err=>{
    res.status(500).json(err);
  });
});


module.exports = router;
